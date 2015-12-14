# Installing Global Dependencies

- Node > 0.12.0 and npm > 2.5.0
- bower: `npm i bower -g`
- Java (for protractor)
- protractor: `npm i protractor@2.5.1 -g`
- nodemon: `npm i nodemon -g` **(needed for development only)**

**Oneliner:**

    npm i bower protractor@2.5.1 nodemon -g

# Installing Local Dependencies

Set up dependencies with:

1. `npm i && bower i` in the root of the project
2. `npm i` in the server folder

# Start Development Servers

After installing the dependencies, run the following in the root of the project to start the app in dev mode:

    npm start

Then go to `http://localhost:8051` to see the app.
