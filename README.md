# Coffee Shop Website

This repository contains the source code for a multi-page coffee shop website. The website allows users to browse and purchase various coffee products.

## Authors

- [@polinalitvichenko](https://github.com/polinalitvichenko)
- [@RoshchukIlya](https://github.com/RoshchukIlya)

## Technologies Used

The project utilizes the following technologies:

- [axios](https://www.npmjs.com/package/axios) - Promise-based HTTP client for the browser and Node.js
- [eslint](https://www.npmjs.com/package/eslint) - JavaScript and TypeScript linter
- [eslint-config-next](https://www.npmjs.com/package/eslint-config-next) - ESLint configuration for Next.js projects
- [next](https://www.npmjs.com/package/next) - React framework for server-rendered applications
- [postcss](https://www.npmjs.com/package/postcss) - CSS post-processor
- [react](https://www.npmjs.com/package/react) - JavaScript library for building user interfaces
- [react-dom](https://www.npmjs.com/package/react-dom) - Entry point for React on the web
- [react-icons](https://www.npmjs.com/package/react-icons) - Icons library for React
- [sass](https://www.npmjs.com/package/sass) - CSS extension language
- [tailwindcss](https://www.npmjs.com/package/tailwindcss) - Utility-first CSS framework
- [typescript](https://www.npmjs.com/package/typescript) - Typed superset of JavaScript

## Getting Started

Follow the instructions below to get a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Make sure you have the following software installed on your system:

- Node.js 18.x
- npm 8.x

To verify your Node.js and npm versions, run the following commands in the terminal:

```bash
node -v
npm -v
```

## Available Scripts

In the project directory, you can run:

### `npm run dev`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

## Install

Follow the following steps to get development environment running.

```bash
git clone https://github.com/toutEstCool/next-prisma.git
```

_OR USING SSH_

```bash
git@github.com:toutEstCool/next-prisma.git
```

- Install node modules

  ```bash
   npm install
  ```

### Starting front-end servers

- Build application

  ```bash
  npm start dev
  ```

---

## Branches

Prefixes for branches

- feature - feature, task, spike
- fix - bugs

A branch name should be named in following format:

`<prefix>/pm-<clickupTaskId>/<brief-task-name>`

Commit messages should be detailed and be descriptive in following format:

- Write commit messages as a sentence
- Make sure one commit does just one thing
- Use present tense for verbs in the commit description
- The description should clearly describe the changes which were done within the code or any other artifacts included into the commit

Pull Requests (PR)

- After receiving 1 approvals, the developer must execute Squash and Merge
- Use a default PR template
- PR name should follow a template `[PM-clickupTaskId]: task-name`
