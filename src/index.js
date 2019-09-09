import React from 'react';
import {Provider} from 'react-redux';
import {createStore, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form'
import './index.scss';
import App from './App';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';

const reducers = {
    form: formReducer
}

const reducer = combineReducers(reducers);

let store = createStore(
    reducer
);

ReactDOM.render(
    <Provider store={store}>
        <App/> 
    </Provider>
    ,document.getElementById('root'));
serviceWorker.unregister();
