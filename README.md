# Typescript NodeJS Express Server

- [Typescript NodeJS Express Server](#typescript-nodejs-express-server)
  - [Setup](#setup)
  - [Development](#development)
  - [Testing](#testing)
  - [Adding a route](#adding-a-route)
  - [Building for production](#building-for-production)
  - [Running on production](#running-on-production)
  - [Compilation](#compilation)
    - [Development environment](#development-environment)
    - [Prod environment](#prod-environment)
    - [Test environment](#test-environment)

## Setup

Clone repo and run `yarn`

👍 Good to go.

## Development

```sh
  yarn dev # or npm run dev
```

This will run 2 processes :

- A typescript compiler with --watch flag
- A nodemon server that watches changes

By default it will use listen on port 3000.

To assign a custom port use the PORT environment variable.

## Testing

Uses jest for testing, and ts-jest for processing typescript code and providing source maps.

Offers 2 modes of testing :

- CI

```sh
  yarn test:ci
```

- Watch Mode

```sh
  yarn test:watch
```

## Adding a route

Two kind of routes can be generated : `public` and `protected`

Run `yarn create:route` and you will be prompted for more information.

Protected routes can only be accessed by providing a valid JWT token in headers.authorization as "Bearer myjwttoken...".
Check [the tests](./src/__tests__) for an example.

## Building for production

Run `yarn build`.

The bundled code can be found in `dist/index.cjs.js`

## Running on production

Run `yarn start`.

Make sure you called `yarn build` before.

## Compilation

### Development environment

When in development mode the js code will be emitted into the `build/` folder with the same structure as the one in `src/`

### Prod environment

When compiling for production, `rollupjs` is used. The typescript config is overriden to emit esm modules for rollup to be able to bundle it.

### Test environment

Jest config can be found in [jest.config.js](./jest.config.js)
The typescript code is processed by ts-jest
