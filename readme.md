# My Next.js App

Welcome to My Next.js App! This application is built using Next.js, Prisma, Clerk, Zod, Tailwind CSS, Eraser, and Cloudinary. This README will guide you through setting up and understanding the structure and functionalities of the app.

## Table of Contents

- [Features](#features)
- [Setup](#setup)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Environment Variables](#environment-variables)
  - [Ngrok Setup](#ngrok-setup)
- [Usage](#usage)
- [Technologies Used](#technologies-used)
- [Contributing](#contributing)
- [License](#license)

## Features

- **Next.js** for server-side rendering and static site generation
- **Prisma** for database ORM and schema management
- **Clerk** for authentication
- **Zod** for validation
- **Tailwind CSS** for styling
- **Eraser** for diagram and schema generation
- **Cloudinary** for image storage
- **Ngrok** for port forwarding for webhook setup

## Setup

### Prerequisites

Ensure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (v14 or later)
- [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/)
- [Ngrok](https://ngrok.com/) for port forwarding
- A PostgreSQL database (or another database supported by Prisma)

### Installation

1. **Clone the repository:**

   ```bash
   git clone https://github.com/yourusername/your-repo-name.git
   cd your-repo-name
   ```

2. **Install dependencies:**

   Using npm:

   ```bash
   npm install
   ```

   Using yarn:

   ```bash
   yarn install
   ```

### Environment Variables

Create a `.env` file in the root of your project and add the following environment variables:

```env
DATABASE_URL=postgresql://user:password@localhost:5432/mydatabase
NEXT_PUBLIC_CLERK_FRONTEND_API=your-clerk-frontend-api
CLERK_API_KEY=your-clerk-api-key
CLOUDINARY_URL=cloudinary://api_key:api_secret@cloud_name
```

Replace the placeholders with your actual credentials.

### Ngrok Setup

Ngrok is used for port forwarding to enable Clerk webhooks in your local development environment. Follow these steps to set it up:

1. **Install Ngrok:**

   Download and install ngrok from [https://ngrok.com/download](https://ngrok.com/download).

2. **Start Ngrok:**

   Open a new terminal window and run the following command to start ngrok on port 3000:

   ```bash
   ngrok http 3000
   ```

   Ngrok will provide you with a forwarding URL (e.g., `https://abcdef.ngrok.io`). Note this URL.

3. **Update Clerk Webhook URL:**

   Log in to your Clerk dashboard and set the webhook URL to the ngrok forwarding URL followed by `/api/webhooks/clerk` (e.g., `https://abcdef.ngrok.io/api/webhooks/clerk`).

## Usage

### Development

To run the application in development mode:

```bash
npm run dev
```

or

```bash
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Production

To build and start the application in production mode:

```bash
npm run build
npm start
```

or

```bash
yarn build
yarn start
```

## Technologies Used

- **Next.js:** A React framework for server-side rendering and static site generation.
- **Prisma:** A modern ORM for Node.js and TypeScript.
- **Clerk:** Authentication made simple for React apps.
- **Zod:** TypeScript-first schema declaration and validation library.
- **Tailwind CSS:** A utility-first CSS framework.
- **Eraser:** Diagram and schema generation tool.
- **Cloudinary:** Cloud-based image and video management.
- **Ngrok:** Tool for port forwarding, making webhooks possible in local development environments.

## Contributing

Contributions are welcome! Please fork the repository and create a pull request with your changes.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/YourFeature`)
3. Commit your changes (`git commit -m 'Add YourFeature'`)
4. Push to the branch (`git push origin feature/YourFeature`)
5. Create a new Pull Request

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

---

Feel free to customize the content as needed for your specific application.
