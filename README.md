# Role-Based Authentication App with auth.js-v5

This is a role-based authentication app built using auth.js-v5. It allows users to authenticate and access different parts of the application based on their assigned roles.

[Visit the app and create an account] (https://auth-js-v5-role-based-app.vercel.app/)

## Features

- User registration and login
- Role assignment for users
- Access control based on user roles
- Secure password hashing and storage
- Two factor authentication
- Forgot password feauter
- Email and password verification token

## Installation

1. Clone the repository:

  ```bash
  git clone https://github.com/allgaleano/auth.js-v5_role_based_app.git
  ```

2. Install the dependencies:

  ```bash
  npm install
  ```

3. Configure the environment variables:

  - Create a `.env` file in the root directory of the project.
  - Add the following variables:

    ```plaintext
    DATABASE_URL="postgresql://..."
    DIRECT_URL="postgresql://..."

    AUTH_SECRET="..."

    GITHUB_CLIENT_ID=...
    GITHUB_CLIENT_SECRET=...

    GOOGLE_CLIENT_ID=...
    GOOGLE_CLIENT_SECRET=...

    RESEND_API_KEY=...

    NEXT_PUBLIC_APP_URL="http://localhost:3000"
    ```

4. Start the application:

  ```bash
  npm start
  ```

## Usage

1. Register a new user by providing the required information.
2. Log in with the registered user credentials.
3. Access different parts of the application based on your assigned role.
