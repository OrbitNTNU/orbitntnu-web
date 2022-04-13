[![Netlify Status](https://api.netlify.com/api/v1/badges/ef12d58e-6936-4291-9f29-76761f05b90e/deploy-status)](https://app.netlify.com/sites/keen-davinci-769980/deploys)

# orbitntnu-web

[orbitntnu.com](https://orbitntnu.com) is a website for the student orannization Orbit NTNU.

## Project Status

Under development 👩‍🔧

Live @ [dev.orbitntnu.com](https://dev.orbitntnu.com)

## Development

### Built with

- [Typescript](https://www.typescriptlang.org/)
  - JavaScript with syntax for types 💪
- [React](https://reactjs.org/)
  - Component based JavaScript library used for creating user interfaces 🌿
- [Gatsby](https://www.gatsbyjs.com/)
  - Blazing fast React framework 🚀
- [Tailwind](https://tailwindcss.com/)
  - Utility-first CSS framework 💅
- [Sanity](https://www.sanity.io/)
  - CMS used to manage the websites content ✅

#### Dependencies

- [react-countdown](https://www.npmjs.com/package/react-countdown)

### Installation

```bash
# Cloning the repository
git clone https://github.com/OrbitNTNU/orbitntnu-web.git
cd orbitntnu-web

# Installing frontend dependencies
cd frontend
yarn install

cd ..

# Installing sanity dependencies
cd sanity
yarn install

cd ..
```

### Running locally

#### Gatsby Frontend

```bash
cd frontend
yarn start
```

#### Sanity

```bash
cd sanity
yarn start
```

### Deploying

Any changes made to the `main` branch in the repository will automaticly be built and deployed.

### Hosting

This project uses Netlify hosting.
