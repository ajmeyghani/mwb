# MWB

A Webpack boilerplate for developing client-side apps.

# Important

## Node Version

Make sure that you are using the latest version of node or at least `> 0.12.9`.

You can use [nvm](https://github.com/creationix/nvm) to manage `node` on your machine. You can install `nvm` with:

    curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.29.0/install.sh | bash

Then, install Node `0.12.9` with `nvm install 0.12.9`. Then, to load `0.12.9` for the current bash session, do:

    nvm use 0.12.9

In order to make `0.12.9` the global default, run:

    nvm alias default 0.12.9

## Permissions for Node and NPM

Please make sure that you have permissions for `npm`, `node` and the folders that they use. **In other words, DO NOT use `sudo`!**. You can give yourself permissions to the following folders or any other folders that you need:

    sudo chown -R `whoami` /usr/local/lib/node_modules
    sudo chown -R `whoami` ~/.npm

### Table of Contents

- [Getting Started](./docs/start.md)

- **[IMPORTANT NOTES](./docs/notes.md)**

- [Folders Structure](./docs/folders.md)

- [Frameworks and Languages](./docs/details.md)

- [List of Tasks](./docs/tasks.md)

- [Installing App Dependencies](./docs/deps.md)

- [Deploy](./docs/deploy.md)

- [Test and Build](./docs/test.md)
