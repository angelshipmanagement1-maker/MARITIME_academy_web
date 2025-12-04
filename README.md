# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/53624721-be75-4c3f-b458-3a07b9b653f2

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/53624721-be75-4c3f-b458-3a07b9b653f2) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/53624721-be75-4c3f-b458-3a07b9b653f2) and click on Share -> Publish.

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)

## Local Testing Setup

Before deploying to production, test the API locally:

1. **Install dependencies**:
   ```sh
   npm install
   ```

2. **Set up local database**:
   - Ensure PostgreSQL is running locally
   - Create the `valueadded` database
   - Create tables `candidates` and `certificate_selections` with the required schema
   - Create a read-only user with SELECT privileges only
   - Update `.env` with your local `POSTGRES_URL`

3. **Install Vercel CLI** (if not already installed):
   ```sh
   npm install -g vercel
   ```

4. **Run local development server**:
   ```sh
   vercel dev
   ```
   This will start the server on `http://localhost:3000`

5. **Test the API**:
   - Open `test.html` in your browser
   - Enter test passport or certificate number
   - Verify responses, CORS, and rate limiting
   - Check console logs for API activity

6. **Verify read-only access**:
   - Attempt a write operation in testing to confirm it fails

## Backend API Deployment on Vercel

This project includes a serverless API built with Node.js and Vercel Functions for certificate verification.

### Prerequisites

- A Vercel account
- PostgreSQL database with read-only access
- The project is already deployed as a static site on Vercel

### Database Setup

1. Ensure your PostgreSQL database `valueadded` has the required tables:
   - `candidates` (id, firstname, lastname, passport, ...)
   - `certificate_selections` (id, candidate_id, certificate_name, certificate_number, start_date, end_date, issue_date, certificate_image BYTEA, ...)

2. Create a read-only user for the database connection.

3. Obtain the connection string for the read-only user.

### Environment Variables

1. In your Vercel project dashboard, go to Settings > Environment Variables.

2. Add the following environment variable:
   - `POSTGRES_URL`: Your PostgreSQL connection string (e.g., `postgresql://username:password@host:port/database`)

3. Ensure the connection string uses the read-only user credentials.

### API Endpoint

The API is available at `/api/verify` and accepts GET requests with query parameters:

- `passport`: Candidate's passport number
- `certificate_number`: Certificate number

At least one parameter must be provided. The API performs a JOIN query and returns certificate details if found.

### CORS Configuration

The API allows requests only from `https://MYDOMAIN.COM`. Replace `MYDOMAIN.COM` in `/api/verify.js` with your actual domain.

### Rate Limiting

The API limits requests to 20 per IP address per minute. Exceeding this returns a 429 status.

### Logging

All requests are logged to the console with timestamp, IP, sanitized params, and result count.

### Deployment Steps

1. Push the code to your Git repository (the `/api/verify.js`, updated `package.json`, and `.env.example` are included).

2. Vercel will automatically detect the API route and deploy the serverless function.

3. If you make changes to the API, commit and push them. Vercel will redeploy automatically.

4. Test the API endpoint using tools like Postman or curl:
   ```
   curl "https://your-vercel-domain.vercel.app/api/verify?passport=123456"
   ```

### Error Handling

- 400: Missing required parameters
- 403: CORS violation
- 429: Rate limit exceeded
- 500: Internal server error (database issues)

### Security Notes

- The API uses a read-only database connection.
- All SQL queries are parameterized to prevent injection.
- Certificate images are returned as base64 encoded strings.
- Dates are formatted as ISO strings (YYYY-MM-DD).

