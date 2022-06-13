<p align="center">
  <img src=".github/logo_nlw_return.svg" alt="Logo Next Level Week"/>
</p>

<h1 align="center">
    <img alt="Next Level Week" src=".github/cover.svg" />
</h1>

<br>

## About this widget

In this widget, it is possible to you send a feedback about the app, you can taking screenshot of current window and choose a type of feedback.

<br>

Some features of the app (web): 💻

<img src=".github/feedget.gif"/>

<br>

Routes of the backend (server): 📄

[POST] /feedbacks 

In this route it is possible to create a new feedback.

Coming soon, documentation with Swagger.

## How to running the project locally 🔨

1. Clone this repository into your machine:

```bash
git clone https://github.com/mhvalente99/nlw-return.git
```

2. With the repository cloned, firstly open the root dir in your terminal and run the commands:

```bash
cd server
```

3. Now install the dependencies and start application:

```bash
npm install

npm run dev
```

> The app is running in http://localhost:3333

4. After server is running, let's run the widget app:

```bash
cd web
```

5. Now install the dependencies and start application:

```bash
npm install

npm run dev
```

> The app is running in http://localhost:3000

## Tests (server) 🧪

Were implemented unit test for use case send feedback

How to run unit test:

```bash
npm run test
```

## Layout 🔖

Can you see the project layout in this link:

https://www.figma.com/community/file/1102912516166573468/Feedback-Widget

## Tech 👨🏻‍💻

<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React"/>
<img src="https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white" alt="Node JS"/>
<img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="Typescript"/>

## Packages/Plugins 📟
 
1. Server

  <img src="https://img.shields.io/badge/Express.js-404D59?style=for-the-badge" alt="Express"/>
  <img src="https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white" alt="Prisma"/>  
  <img src="https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white" alt="Jest"/>
  <img src="https://img.shields.io/badge/eslint-3A33D1?style=for-the-badge&logo=eslint&logoColor=white" alt="ESLint"/>
  <img src="https://img.shields.io/badge/prettier-1A2C34?style=for-the-badge&logo=prettier&logoColor=F7BA3E" alt="Prettier"/>

2. Web
  
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS"/>
  Vite
  
## Next Steps 🤘🏻

# Web

  - [ ] Screenshot without widget
  - [ ] Autoclose widget after send feedback
  - [ ] Create mail template
  - [ ] Treatment errors and exceptions
  - [ ] Dark/Light theme
  - [ ] Input data validation

# Server
  
  - [ ] Create documentation with swagger
  - [ ] Integration tests
  - [ ] Change database provider to Postgres

## Contributors 🚀

<table>
  <tr>
    <td align="center"><img src="https://avatars.githubusercontent.com/u/32014139?v=4" width="100px;" alt="Matheus Valente"/><br /><sub><b>Matheus Valente</b></sub></a><br /><a href="https://www.linkedin.com/in/matheus-valente-987634119/"title="Code">💻</a></td></td>
</table>
