import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux';




const rootreducer = combineReducers({
    user: userReducer,
    products: productReducer
})

function userReducer(state = '', action) {
    switch (action.type) {
        case 'UPDATE_USER':
            return action.payload.user
        default:
            return state
    }

}

function productReducer(state = [], action) {
    return state
}

const initialState = {
    user: "initial name",
    products: [{ product: 'initial product' }]
};
const store = createStore(
    rootreducer,
    initialState,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
//console.log(store.getState())


const updateUserAction = {
    type: 'UPDATE_USER',
    payload: {
        user: 'john'
    }
};

store.dispatch(updateUserAction);
console.log(store.getState())



ReactDOM.render( 
    <Provider store = { store } >
        <App/>
    </Provider>, 
    document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();