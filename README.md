# Nest-Next Monorepo 🚀

A powerful monorepo template integrating **Next.js (frontend)** and **NestJS (backend)** with modern tooling such as **Turborepo, TypeScript, TailwindCSS, and shadcn**. This setup is designed for **scalability, performance, and developer experience**.

---

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

### 3️⃣ Run Development Servers

```sh
pnpm run dev
```

### 4️⃣ Build for Production

```sh
pnpm build
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
