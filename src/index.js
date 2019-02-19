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

const PRODUCTION = false;
let store_dev;


//library.add(faIgloo)
//KEYS:
// client id: 291285678637-rp8qv6gns8tek7ppas5thqsq76q9q45i.apps.googleusercontent.com


//const middleware = applyMiddleware(promise(), ReduxThunk , createLogger());
const middleware = applyMiddleware(promise(), ReduxThunk , createLogger());
if (!PRODUCTION) {
    const allStoreEnhancers = compose(
        middleware,
        window.devToolsExtension && window.devToolsExtension()
    );
    store_dev = createStore(reducers, {}, allStoreEnhancers)
}

const store_production = createStore(reducers, {}, middleware);


const store = PRODUCTION ? store_production : store_dev;


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.querySelector('#root')
);