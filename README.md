<!-- @format -->

# Dogschool Hope Monorepo

This is a monorepo for the **Dogschool Hope** project. It includes:

- **Web**: React app
- **API**: NestJS backend
- **Mobile**: React Native app
- **Shared**: Reusable logic, types, and utilities

Built with [Turborepo](https://turbo.build/repo) for high-performance monorepo management.

---

## 🧱 Monorepo Structure

```
apps/
  web/        → React web app
  api/        → NestJS backend
  mobile/     → React Native app

packages/
  ui/         → Shared UI components
  utils/      → Shared utility functions
  config/     → Shared configs (eslint, tsconfig, etc.)
```

---

## 🚀 Getting Started

### 1. Install dependencies

```bash
yarn install
```

### 2. Start the apps

In the root folder:

```bash
Get started by editing apps/web/app/page.tsx
```

This will run `web`, `api`, and `mobile` in parallel using `turbo`.

---

## 📦 Individual App Commands

You can also run each app separately:

### Web

```bash
cd apps/web
yarn dev
```

### API

```bash
cd apps/api
yarn start:dev
```

> Make sure you have a `.env` file configured in `apps/api/`.

### Mobile

```bash
cd apps/mobile
yarn start
```

> You can also use `npx expo start` if using Expo.

---

## 🧪 Tests (Coming Soon)

Each app and package will have its own test configuration using tools like:

- **Jest**
- **React Testing Library**
- **Supertest** for API

---

## 🛠 Tools Used

- [Turborepo](https://turbo.build)
- [Yarn Workspaces](https://classic.yarnpkg.com/en/docs/workspaces/)
- [React](https://reactjs.org)
- [React Native](https://reactnative.dev)
- [NestJS](https://nestjs.com)
- [TypeScript](https://www.typescriptlang.org)
