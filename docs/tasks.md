## Tasks

All the tasks are defined in `package.json` in the root of the project. You can get the following list by running `npm run` as well

- `npm start`: Start developer servers
- `npm test`: Run unit tests in CI mode
- `npm run tdd`: Run unit tests in watch mode
- `npm run test:func`: Runs the protractor tests
- `npm run clean`: Deletes all the artifacts before a build.
- `npm run build`: Builds the client and puts it in `client/public`
- `npm run client:compile`: Webpack's watch compiling assets on the fly
- `npm run server`: Runs the express server to serve the app
- `npm run server:compile`: Webpack's watching and compiling es6 on the server
- `npm run server:prod`: Runs the server in prod mode
- `npm run prod`: Builds the app and runs the server in prod mode
