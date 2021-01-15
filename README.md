# Getting Started

Before initializing the project must create a file .env, which will define the port `PORT` and the environment `NODE_ENV` in which it will be deployed
I leaving an example named example.env, to make implementation easier.

You will need to download dependencies using `yarn` command

## Documentation

After services are up you can see the swagger of the services in [http://localhost:5000/api/docs/#/](http://localhost:5000/api/docs/#/)

You can find in the docs folder 
- postman collection
- the mapping of the API attributes
- Server architecture

## Available Scripts

In the project directory, you can run:

### `yarn dev`
Runs the server in the development mode, using nodemon\
example: [http://localhost:5000](http://localhost:5000) \
The server will reload if you make edits.

### `yarn start`

Runs the server in the development mode.\
example: [http://localhost:5000](http://localhost:5000) \
The server will `NOT` reload if you make edits.

### `yarn test`

Launches the test runner in the interactive watch mode.

### `yarn test:watch`

Launches the test runner in the interactive watch mode.\
the tests are re-laucheswhen the code changes

### `yarn test:coverage`

Visualize the coverage of the tests performed



