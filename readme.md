# Requirements

1. Node and npm
2. bower: `npm i bower -g`
3. (Optional) CoffeeScript `npm install -g coffee-script`
4. Java (for protractor)
5. protractor: `npm i protractor@2.5.1 -g`
6. nodemon: `npm i nodemon -g`

# Set up

Set up dependencies:

1. `npm i` in the root of the project
2. `npm i` in the server folder
3. `bower i` in the client folder

# Start Development

After installing the dependencies, run the following to start development:

    npm start

Then go to `http://localhost:8051` to see the app.

# Running Tests

## Unit Tests

### CI Mode

    npm test

### TDD Mode

    npm run tdd

## Protractor Tests

    npm start

then, in a new terminal tab:

    npm run test:func
