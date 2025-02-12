# Superepo 🚀

A powerful monorepo template integrating **Next.js (frontend)** and **NestJS (backend)** with modern tooling such as **Turborepo, TypeScript, TailwindCSS, and shadcn**. This setup is designed for **scalability, performance, and developer experience**.

---

<<<<<<< HEAD
## 📌 Features

### 🌐 Web (Next.js 15) 🖥️

- Uses **Turbopack** for ⚡ fast builds
- Authentication with **NextAuth.js** 🔐
- Form validation with **Zod** & **react-hook-form** ✅
- Data visualization with **Recharts** 📊
- Theming support via **next-themes** 🎨
- Fully typed with **TypeScript** 🏗️
- UI built with **shadcn/ui & TailwindCSS** 🏄
- Hot Module Replacement (**HMR**) for a seamless development experience 🔄
=======
You can use or follow the step 1 to clone.
```bash
pnpm dlx superepo@latest init
```

1. Clone the repository

```bash
git clone https://github.com/mohitarora/superepo.git

cd superepo
```

2. Setup Environment Variables

Copy .env.example to .env in both apps/api and apps/web
```bash
cp apps/api/.env.example apps/api/.env
cp apps/web/.env.example apps/web/.env
```
>>>>>>> 91cfef68a645366c37e832717770f704481e70e6

### 🏗 API (NestJS 11) 🛠

- Modular and scalable backend architecture 🏛
- **TypeORM** for database integration 🗄️
- Authentication with **JWT & Passport.js** 🔑
- API documentation using **Swagger** 📜
- Fully typed with **TypeScript** 🚀
- Hot Module Replacement (**HMR**) for fast backend updates ⚡

### 📦 Monorepo Setup 🏗

- Uses **Turborepo** for efficient builds and package management 📈
- Shared ESLint & TypeScript configurations 🛡️
- Code formatting with **Prettier** 🎨
- Optimized package management with **PNPM workspaces** 📦
- Docker support with **Docker Compose** 🐳

---

## 🚀 Getting Started

### 1️⃣ Prerequisites

- **Node.js** >= 20 🟢
- **PNPM** (Install via `npm i -g pnpm`) 📦
- **Clone** the repository 🛠️
- **Rename** the .env.example to .env ⚙️

### 2️⃣ Install Dependencies

```sh
pnpm install
```

<<<<<<< HEAD
### 3️⃣ Run Development Servers
=======
4. Start the database (optional)

example for Postgres:
```bash
docker pull postgres
docker run -d --name <container_name> -p 5432:5432 -e POSTGRES_PASSWORD=<new_password> postgres
```
then update the .env file with the new password (default **DB_USERNAME**=postgres, **DB_DATABASE**=postgres) 

5. Start the app
>>>>>>> 91cfef68a645366c37e832717770f704481e70e6

```sh
pnpm run dev
```

<<<<<<< HEAD
### 4️⃣ Build for Production

```sh
pnpm build
=======
6. Visit http://localhost:3000

7. Visit http://localhost:4000/api/docs

If you need to install new packages, you can add to the respective app folder:

```bash
pnpm add <package-name>
>>>>>>> 91cfef68a645366c37e832717770f704481e70e6
```

---

## 🐳 Running with Docker

You can start the frontend and backend using Docker Compose:

```sh
docker-compose up --build
```

This will spin up:

- 🚀 `api` - NestJS backend on **[http://localhost:4000](http://localhost:4000)**
- 🌐 `web` - Next.js frontend on **[http://localhost:3000](http://localhost:3000)**

To stop everything:

```sh
docker-compose down
```

---

## 📖 API Documentation

Swagger API documentation is available at:

```link
http://localhost:4000/api
```

---

## 📜 Code Formatting & Linting

### Format Code 🎨

```sh
pnpm format
```

<<<<<<< HEAD
### Run ESLint 🔍

```sh
pnpm lint
```

---

## 📂 Project Structure 🏗

```files
.superepo/
├── apps/
│   ├── web/      # Next.js (frontend)
│   ├── api/      # NestJS (backend)
│
├── packages/
│   ├── eslint-config/  # Shared ESLint config
│   ├── typescript-config/  # Shared TypeScript config
│
├── turbo.json  # Turborepo configuration
├── package.json  # Root package manager setup
├── pnpm-workspace.yaml  # PNPM workspace config
```

---

## 🎯 Contributing 🤝

Pull requests are welcome! Ensure your changes follow the project's coding style and conventions.

---

## 📜 License ⚖️

This project is under **MIT LICENSE** by default.
=======
- Next.js 15
- NestJS 11
- shadcn/ui
- next-auth
- passport
- TypeORM

## License

Superepo is released under the [MIT License](https://opensource.org/licenses/MIT).
>>>>>>> 91cfef68a645366c37e832717770f704481e70e6
