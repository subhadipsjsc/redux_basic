import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore, combineReducers} from 'redux'
import {Provider} from 'react-redux';

import userReducer from './redux-elements/reducers/userReducer';
import productReducer from './redux-elements/reducers/productReducer';


const rootreducer = combineReducers({
    user : userReducer,
    products : productReducer
}) 




const initialState = {
    user : {
        name:'subhadip',
        age: 30,
        email : 'subhadipsjsc@gmail.com'
    },
    products :[{product : 'initial product'}]
};

const store = createStore(
    rootreducer, 
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//console.log(store.getState())

/* ------ relocated to redux-elements/actions/userAction.js -----

const updateUserAction = {
    type: 'UPDATE_USER',
    payload : {
        user : 'john'
    }
};

*/

/* ------ relocated to app.js / {mapActionToProp} -----

store.dispatch(updateUserAction);

*/


//console.log(store.getState())

store.subscribe(()=>{
    console.log(JSON.stringify(store.getState()))
})


ReactDOM.render(
    <Provider store={store}>   <App/> </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
