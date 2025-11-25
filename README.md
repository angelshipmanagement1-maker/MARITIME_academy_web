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

## Certificate Verification API

This project includes a Python FastAPI backend for certificate verification.

### Setup

1. Ensure Python 3.8+ is installed.

2. Navigate to the api directory:

   ```sh
   cd api
   ```

3. Install dependencies:

   ```sh
   pip install -r requirements.txt
   ```

4. Configure environment variables in `.env`:

   Update the following with your PostgreSQL details:

   ```
   DB_HOST=your_postgresql_host
   DB_PORT=5432
   DB_NAME=your_database_name
   DB_USER=readonly_username
   DB_PASSWORD=readonly_password
   ```

   Note: Use a read-only user for security.

5. Run the API server:

   ```sh
   uvicorn main:app --reload
   ```

   The API will be available at http://localhost:8000

### API Endpoint

- `GET /api/verify`: Verify certificate by certificate_number, participant_name, or passport_number.

  Query parameters: certificate_number, participant_name, passport_number (at least one required)

  Returns: name, course, certificate_id, issue_date, image_url

### Database Schema

Assumed table: `certificates`

Columns: certificate_number, participant_name, passport_number, name, course, certificate_id, issue_date, image_url

Adjust the query in `main.py` if your schema differs.

### Frontend

The React frontend calls the API at http://localhost:8000/api/verify. Ensure the API is running when using the verification feature.
