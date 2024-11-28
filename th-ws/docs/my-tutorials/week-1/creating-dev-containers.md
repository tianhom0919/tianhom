---
sidebar_position: 4
---

# Creating Dev Containers

In this tutorial, we will learn how to create Dev Containers in VS Code.

---

## Prerequisites

Before proceeding, ensure you have the following installed on your system:

- **Visual Studio Code (VS Code)**  
  [Download here](https://code.visualstudio.com/).

- **Remote - Containers Extension**  
  Install the Remote - Containers extension in VS Code from the Extensions Marketplace.

---

## Steps for Setting Up a Dev Container 

### Step 1: Create a folder for your project.

Once you have established an SSH connection with your Linux host in VS Code, open up the terminal by Use the code below to create a directory for your dev container:

```bash
mkdir my-dev-container
cd my-dev-container
```

### Step 2: Open Folder from Container

In VS Code, hit `Ctrl + Shift + P` to open up the **Command Palette**. Insert **"Dev Containers: Open Folder in Container..."** and hit `Enter`.

![VSCode0](./img/devcon0.png)

You will be prompted to select a folder to open the container. Select the folder you have just created: `my-dev-container`. 

### Step 3: Configure Dev Container

Now, you will need to configure your Dev Container, select **"Node.js & JavaScript"** > **"20-bookworm"** and click **"OK"**.

![VSCode1](./img/devcon1.png)

