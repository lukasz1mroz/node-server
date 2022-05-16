# About node-server

Simple Node.js server connecting to external API. In this assignment Hacker News API has been used.

## Build and run

Application can be run locally in development mode and after building with Babel in production mode.

- Before running the application, install all dependencies from package.json with `npm install` command.
- For the development mode type command `npm run start:nodemon` from main directory. Application in this mode is running on localhost:3000 port.
- For the production mode run `npm run build` to build the app and then `npm run serve` from `./dist` folder.

## Endpoints

`topTenWords` endpoint is available and accepts filter query paremeters with values of `twentyFive or week`.

## Logging

Winston library is used as logging middleware component. Additional logging capabilities like transports and metadata can be added in `LogMiddleware.ts` config file.
