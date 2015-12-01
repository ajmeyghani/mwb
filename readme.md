# Minimal Webpack Boilerplate

A minimal webpack boilerplate focused on Angular. You can easily update it to work with other tools.

# Requirements

1. Node and npm
2. bower: `npm i bower -g`
3. (Optional) CoffeeScript `npm install -g coffee-script`
4. Webpack `npm i webpack -g`
4. Java (for protractor)
5. protractor: `npm i protractor@2.5.1 -g`
6. nodemon: `npm i nodemon -g`

**Oneliner:**

    npm i bower coffee-script webpack protractor@2.5.1 nodemon -g

# Set up

Set up dependencies with:

1. `npm i` in the root of the project
2. `npm i` in the server folder
3. `bower i` in the client folder

# Start Development

After installing the dependencies, run the following to start development:

    npm start

Then go to `http://localhost:8051` to see the app.

# Running Tests

## Unit Tests

1. CI Mode: `npm test`
2. Watch tdd mode: `npm run tdd`


## Protractor Tests

1. First, start the app: `npm start`

	the open a new terminal tab and do:

2. `npm run test:func`

# Building

You can build the client with:

	npm run build

Then, you can serve it with:

	npm run server:prod

### Build and serve

The alias for buld and run is `npm run pl`
