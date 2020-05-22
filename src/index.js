import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import App from "./App";
import reducers from "./reducers";
import {BrowserRouter} from "react-router-dom";
import {actionCounterMiddleware} from "./middlewares/actionCountMiddleware";
const invariant = require("redux-immutable-state-invariant").default();

const createStoreWithMiddleware = applyMiddleware(invariant, thunk, actionCounterMiddleware)(createStore);

ReactDOM.render(
    <Provider
        store={createStoreWithMiddleware(
            reducers,
            window.__REDUX_DEVTOOLS_EXTENSION__ &&
            window.__REDUX_DEVTOOLS_EXTENSION__()
        )}
    >
        <BrowserRouter>   
            <App />
        </BrowserRouter>
    </Provider>,
    document.querySelector("#root")
);
serviceWorker.unregister();