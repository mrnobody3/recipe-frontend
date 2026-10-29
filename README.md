This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

### Prerequisites

- [Docker](https://docs.docker.com/get-docker/) and [Docker Compose](https://docs.docker.com/compose/) installed on your machine.
- (Optional for running without Docker) [Node.js 20+](https://nodejs.org/) and npm.

### Running with Docker

The easiest way to run the application is using Docker Compose, which mounts your local directory for hot-reloading and preserves container dependencies.

1. **Environment Setup** (if needed):
   ```bash
   cp .env.example .env.local
   ```

2. **Start the development server**:
   ```bash
   docker compose up --build
   ```
   To run in the background (detached mode):
   ```bash
   docker compose up -d --build
   ```

3. **Open the application**:
   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

4. **Useful Docker commands**:
   - View container logs:
     ```bash
     docker compose logs -f
     ```
   - Stop containers:
     ```bash
     docker compose down
     ```

#### Alternative: Using Docker CLI directly

Build the image:
```bash
docker build -t recipe-frontend .
```

Run the container:
```bash
docker run -p 3000:3000 -v $(pwd):/app -v /app/node_modules recipe-frontend
```

---

### Running Locally (Without Docker)

First, install dependencies:
```bash
npm install
```

Then, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `src/app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
