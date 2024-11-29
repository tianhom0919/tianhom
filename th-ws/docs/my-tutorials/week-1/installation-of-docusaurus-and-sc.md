---
sidebar_position: 5
---

# 1-5 Installation of Docusaurus and Source Control Using Git

In this tutorial, we will install Docusaurus in a Dev Container and perform source control using Git and GitHub.

## Requirements

Before starting, ensure you have the following installed and set up:

- **Git**: Install [Git](https://git-scm.com/) for source control.
- **GitHub Account**: Create an account on [GitHub](https://github.com/) if you don’t already have one.
- **Node.js**: Ensure Node.js is installed. You can download it from [nodejs.org](https://nodejs.org/).

---

## Docusaurus Guide

### Step 1: Install Docusaurus

Inside the container's terminal in VS Code, navigate to your project folder. Install Docusaurus by running the following commands:

```bash
npx create-docusaurus@latest my-website classic
cd my-website
```
When prompted to select a language, choose JavaScript.

### Step 2: Start the Docusaurus Development Server

```bash
npm run start
```

Open your browser and navigate to `http://localhost:3000` to see your Docusaurus site in action.

### Step 3: Start Editing!

In Docusaurus, Markdown is used for creating documentation and content. It is a lightweight markup language used for creating formatted text using plain text. Markdown files typically have the `.md` extension. Start editing those and create your own documentation or notes.

After editing, you will need to build the website again into a directory of static contents to view the changes. To build and serve the website:

```bash
npm run build
npm run serve
```

For more information, visit [here](https://www.markdownguide.org/getting-started/) to get started learning Markdown.

---

## Git Source Control Guide

