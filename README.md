# Congometrix Next.js Application

This is a Next.js application designed to provide enhanced data accessibility. The platform integrates modern technologies and machine learning to deliver robust data management capabilities.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Environment Variables](#environment-variables)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)

## Installation

To install and set up the project locally, follow these steps:

1. Clone the repository:
    ```bash
    git clone https://github.com/your-username/your-repository.git
    cd your-repository
    ```

2. Install the dependencies:
    ```bash
    npm install
    ```

3. Create a `.env.local` file in the root of your project and add the following environment variables:

    ```env
    NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=YOUR KEY
    CLERK_SECRET_KEY=YOUR SECRET KEY
    NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL=/overview
    NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL=/sign-up-utility
    NEXT_PUBLIC_CLERK_SIGN_IN_URL=/sign-in
    NEXT_PUBLIC_CLERK_SIGN_UP_URL=/sign-up
    NEXT_PUBLIC_API_URL=YOUR API URL
    NEXT_PUBLIC_FASTAPI_URL=YOUR FASTAPI URL
    ```

4. Run the development server:
    ```bash
    npm run dev
    ```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Usage

To use the application, follow these steps:

1. Navigate to the sign-up or sign-in page to create or access your account.
2. Explore the available datasets and use the AI-driven tools for data analysis and interaction.
3. Utilize the APIs for integrating public datasets into your third-party applications.

## Environment Variables

Here are the environment variables required for the application to run:

- `NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY`: Your Clerk publishable key
- `CLERK_SECRET_KEY`: Your Clerk secret key
- `NEXT_PUBLIC_CLERK_SIGN_IN_FALLBACK_REDIRECT_URL`: Fallback URL for sign-in redirection
- `NEXT_PUBLIC_CLERK_SIGN_UP_FALLBACK_REDIRECT_URL`: Fallback URL for sign-up redirection
- `NEXT_PUBLIC_CLERK_SIGN_IN_URL`: URL for the sign-in page
- `NEXT_PUBLIC_CLERK_SIGN_UP_URL`: URL for the sign-up page
- `NEXT_PUBLIC_API_URL`: Base URL for the API
- `NEXT_PUBLIC_FASTAPI_URL`: Base URL for the FastAPI service

## Contributing

Contributions are welcome! Please fork the repository and use a feature branch. Pull requests are warmly welcome.

1. Fork the repository.
2. Create a feature branch (`git checkout -b feature-branch`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License

This project is licensed under the MIT License.

## Contact

Pacifique Rubasha - [p.kishinyambwe@alustudent.com](mailto:p.kishinyambwe@alustudent.com)

Feel free to contact me if you have any questions or need further information.
