# react-redux-express-ts-template

### Initialization 
First, Run the following commands to ensure that all global and local dependencies are installed ( or run `sh init.sh` on MacOS).

`npm install -g browserify watchify uglify babelify typescript`

`npm install`

Also, **Install Yarn**:  
* [Windows-installation](https://yarnpkg.com/lang/en/docs/install/#windows-stable) 

* [MacOS-installation](https://yarnpkg.com/lang/en/docs/install/#macOS-stable) 


### Development

To start the server, run `npm start` and navigate to `localhost:8081` in your browser.

A repeater endpoint has been included in the server for CORS requests (example [request from the app](./web/src/content/sample/repeaterEpic.ts) and [React component that implements request](./web/src/content/sample/RepeaterSample.tsx) ) Use the endpoint `/repeater` and provide your configuration settings as headers. Be sure to include your request url! 

> Other accepted configuration settings can be found [here](https://github.com/axios/axios#request-config).

To run the dev build with watchers, run `npm run build` and wait for your bundle to build. The first bundle may take awhile. 

To test, run `npm test` to start the test watcher. Be sure to name your test file in a `<file-name>.test.<file-extension>` format.
 

To use the production version of React and remove the redux-logger middleware, run `npm run prod`.

The command `npm run eb` is included to run a prod build in an ElasticBeanstalk instance.








###### Last updated date: 2018-07-08