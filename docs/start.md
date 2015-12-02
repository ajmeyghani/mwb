# Installing Global Dependencies

1. Node and npm
2. bower: `npm i bower -g`
3. (Optional) CoffeeScript `npm install -g coffee-script`
4. Java (for protractor)
5. Testem `npm i testem -g`
6. protractor: `npm i protractor@2.5.1 -g`
7. nodemon: `npm i nodemon -g`

**Oneliner:**

    npm i bower coffee-script testem protractor@2.5.1 nodemon -g

# Installing Local Dependencies

Set up dependencies with:

1. `npm i` in the root of the project
2. `npm i` in the server folder
3. `bower i` in the client folder


# Start Development Servers

After installing the dependencies, run the following to start development:

    npm start

Then go to `http://localhost:8051` to see the app.

