# Le Bon Geek — Frontend

English README for the frontend of the "Le Bon Geek" project — a React + Vite application.

## What is this

Le Bon Geek is a marketplace-style web application. This repository contains the frontend application built with React, Vite and Redux. It implements listing and searching products/ads, user authentication, ad creation and editing, and other marketplace features.

## Key Features

- React-based SPA with Vite for fast development
- Redux for application state management
- SASS for styles and a componentized layout
- Image upload and ad/product management flows
- Accessible routes and responsive layout

## Tech Stack

- Framework: React (18)
- Bundler / Dev server: Vite
- Language: JavaScript / JSX (TypeScript tooling configured)
- State: Redux
- HTTP: axios
- UI: Semantic UI, Bootstrap, MUI utilities and custom SCSS

## Quick Start

Prerequisites: Node.js (16+ recommended) and npm or yarn installed.

1. Clone the repository

```bash
git clone https://github.com/SlimDumbledodge/lebongeek-front.git
cd lebongeek-front
```

2. Install dependencies

```bash
npm install
# or
yarn install
```

3. Run the development server

```bash
npm run dev
# or
yarn dev
```

The app will usually be available at `http://localhost:5173` (Vite default).

## Available Scripts

The project exposes the following npm scripts (see `package.json`):

- `npm run dev` — Start Vite development server
- `npm run build` — Build for production (`tsc` + `vite build`)
- `npm run preview` — Preview production build locally
- `npm run lint` — Type-check and run ESLint (no emit)
- `npm run lint:fix` — Run ESLint with autofix

Use `npm run <script>` or `yarn <script>` as appropriate for your package manager.

## Project Structure (high level)

- `src/` — application source code
  - `components/` — React components and UI pieces
  - `actions/`, `reducers/`, `middlewares/`, `store/` — Redux implementation
  - `assets/` — images and base URL helper
  - `styles/` — SCSS variables and global styles
- `public/` — static assets and `manifest.json`
- `index.html` — app entry HTML

## Environment & Configuration

- API base URL: check `src/assets/baseUrl.js` for how the frontend composes backend requests.
- If your environment requires other variables (auth keys, API endpoints), provide them according to your deployment or local `.env` conventions; Vite supports `VITE_` prefixed variables.

## Contributing

- Fork and create a feature branch: `git checkout -b feat/your-feature`
- Follow existing code style and run linting before committing
- Open a pull request describing the change and any manual testing steps

## Notes for Maintainers

- The repository includes TypeScript tooling and ESLint; consider enabling CI checks for `lint` and `build`.
- There are some merge markers visible in `package.json` history — resolve them if encountered locally.

## License

This project is marked `MIT` in `package.json` — please verify license file and contributor agreements before broader reuse.

---

If you want, I can also:
- add badges (build / lint) to the README
- produce a short CONTRIBUTING.md or DEVELOPMENT.md with local env examples
- fix the merge conflicts noted in `package.json`

Created by GitHub Copilot on request.
