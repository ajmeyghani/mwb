# Installing Global Dependencies

- Node > 0.12.0
- bower: `npm i bower -g`
- Java (for protractor)
- protractor: `npm i protractor@2.5.1 -g`
- phantomjs: `npm i phantomjs -g` (for running unit tests in ci mode)
- nodemon: `npm i nodemon -g` (for development)

**Oneliner:**

    npm i bower protractor@2.5.1 nodemon -g

# Installing Local Dependencies

Set up dependencies with:

1. `npm i && bower i` in the root of the project to install client dependencies
2. `npm i` in the server folder to install server dependencies


# Start Development Servers

After installing the dependencies, run the following to start development:

    npm start

Then go to `http://localhost:8051` to see the app.

