import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux';

import userReducer from './redux-elements/reducers/userReducer';
import productReducer from './redux-elements/reducers/productReducer';
import shopReducer from './redux-elements/reducers/shopReducer'

const rootreducer = combineReducers({
    user : userReducer,
    products : productReducer,
    shop : shopReducer
}) 


const store = createStore(
    rootreducer, 
    // initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

// store.subscribe(()=>{
//     console.log(JSON.stringify(store.getState()))
// })


ReactDOM.render(
    <Provider store={store}>   <App/> </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
