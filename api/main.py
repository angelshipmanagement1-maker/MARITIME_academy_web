from fastapi import FastAPI, HTTPException, Query
from fastapi.middleware.cors import CORSMiddleware
from slowapi import Limiter, _rate_limit_exceeded_handler
from slowapi.util import get_remote_address
from slowapi.errors import RateLimitExceeded
from slowapi.middleware import SlowAPIMiddleware
import psycopg2
import os
from dotenv import load_dotenv
import logging

load_dotenv()

app = FastAPI()

# Logging
logging.basicConfig(level=logging.INFO)

# CORS
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],  # Adjust for production
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Rate limiting
limiter = Limiter(key_func=get_remote_address)
app.state.limiter = limiter
app.add_exception_handler(RateLimitExceeded, _rate_limit_exceeded_handler)
app.add_middleware(SlowAPIMiddleware)

# DB connection
def get_db_connection():
    return psycopg2.connect(
        host=os.getenv("DB_HOST"),
        port=os.getenv("DB_PORT", 5432),
        database=os.getenv("DB_NAME"),
        user=os.getenv("DB_USER"),
        password=os.getenv("DB_PASSWORD")
    )

@app.get("/api/verify")
async def verify_certificate(
    certificate_number: str = Query(None),
    participant_name: str = Query(None),
    passport_number: str = Query(None)
):
    if not any([certificate_number, participant_name, passport_number]):
        raise HTTPException(status_code=400, detail="At least one search parameter required")
    
    conn = get_db_connection()
    cur = conn.cursor()
    query = """
    SELECT name, course, certificate_id, issue_date, image_url
    FROM certificates
    WHERE certificate_number = %s OR participant_name = %s OR passport_number = %s
    LIMIT 1
    """
    cur.execute(query, (certificate_number, participant_name, passport_number))
    result = cur.fetchone()
    cur.close()
    conn.close()
    
    if result:
        return {
            "name": result[0],
            "course": result[1],
            "certificate_id": result[2],
            "issue_date": str(result[3]),
            "image_url": result[4]
        }
    else:
        raise HTTPException(status_code=404, detail="Certificate not found")