import 'semantic-ui-css/semantic.min.css';
import 'materialize-css/dist/css/materialize.min.css';
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, compose, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
//import thunk from 'redux-thunk';
import promise from 'redux-promise-middleware';
// import ReduxPromise from 'redux-promise';
import { createLogger } from 'redux-logger';
import App from './App';
import reducers from './reducers';

const { REACT_APP_PRODUCTION } = process.env;
const production =
  JSON.stringify(REACT_APP_PRODUCTION) === JSON.stringify('true');
//console.log(`production: ${production}`);

const middleware = applyMiddleware(promise(), ReduxThunk, createLogger());
let store_dev;
if (production !== true) {
  //console.log("production must be false");
  const allStoreEnhancers = compose(
    middleware,
    window.devToolsExtension && window.devToolsExtension()
  );
  store_dev = createStore(reducers, {}, allStoreEnhancers);
}
const store_production = createStore(reducers, {}, middleware);

const store = production ? store_production : store_dev;

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector('#root')
);
