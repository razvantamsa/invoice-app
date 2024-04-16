# Invoice Management System

## Backend Features
- Implemented a NestJS API with three endpoints:
  - POST `/login`
  - GET `/invoice/:id`
  - GET `/invoices`
  - GET `/totalInvoices`
- Restricted endpoints with user-specific access using JWT.
- Utilized PostgreSQL & Prisma for database operations.
- Seeded the database using a script.
- Implemented error handling with an exception filter.
- Created a pagination middleware for fetching all invoices.
- Implemented password encryption with `bcrypt`

## Frontend Features
- Login page.
- Invoices page with error-handling pagination.
- Pop-up modal for viewing each invoice.
- Error boundary for improved error handling.
- State management using Redux Toolkit.
- Stored access token in browser cookies.

## Other Tools and Utilities
- `appcli`: A dedicated CLI tool for running and managing the project.
- Docker Compose configuration for orchestrating frontend, backend, and database services.

## How to Run
### Before running, you must set up your environmental variables.
- `development/.env.secrets`: create file and fill with values based on template in `development/.env.secrets.template`

- `backend-app/.env`: create file and fill with values based on template in `backend-app/.env.template` 
    - `DATABASE_URL`: must follow the structure, matching the values in `.env.secrets` -> <b>postgresql://<POSTGRES_USER>:<POSTGRES_PASSWORD>@inv_app_postgres:5432/<POSTGRES_DB>?schema=public</b>
    - `PASSPORT_SECRET` must be a string
    - `BCRYPT_SALTROUNDS` must be a number
    - `BCRYPT_PEPPER` must be a string

```bash
appcli start --build
appcli migrate init
appcli seed
```
- API URL - localhost:3000
- WEB URL - localhost:8080

## Auth Credentials
- Email: user1@example.com
- Password: password
