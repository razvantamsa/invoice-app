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
```bash
appcli start --build
appcli migrate init
appcli seed
```

## Auth Credentials
- Email: user1@example.com
- Password: password
