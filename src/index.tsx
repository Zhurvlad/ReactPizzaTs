import React from 'react';
import ReactDOM from 'react-dom';

import {Provider} from "react-redux";
import {BrowserRouter as Router} from "react-router-dom";

import {store} from "./Redux/store";
import App from "./App";

import '../src/scss/app.scss'

ReactDOM.render(
    <React.StrictMode>
        <Router>
            <Provider store={store}>
                <App/>
            </Provider>
        </Router>
    </React.StrictMode>,
    document.getElementById('root')
);


