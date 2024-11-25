---
sidebar_position: 2
---

# Establishing SSH Connection

In this tutorial, you will learn how to establish an SSH connection between your personal PC and a remote PC running on Ubuntu.  

Ensure that you have a GitHub account created. You will need it to store your authentication keys.  

## System Requirements
- **Local:** A supported OpenSSH compatible SSH client must be installed.
- **Remote Host:** OpenSSH server installed on Ubuntu 16.04 and above.

## Installation

On your client machine:  

- Install a supported OpenSSH compatible SSH client by entering below in your terminal.

         sudo apt install openssh-client

- Install [Visual Studio Code](https://code.visualstudio.com/).

- Install the [Remote-SSH extension](https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-ssh) pack.

On the server/host:

- Install OpenSSH server by running the code below in the terminal.

          sudo apt install openssh-server  

## SSH Keys

- To generate the SSH key, run the following command:

        ssh-keygen -t rsa

    This will