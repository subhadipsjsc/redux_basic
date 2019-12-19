import {combineReducers } from 'redux'


function userReducer(state = '', action) {
    switch (action.type) {
        case 'UPDATE_USER':
            return action.payload.user
        default:
            return state
    }

}

function productReducer(state = [], action) {
    switch (action.type) {
        case 'ADD_PRODUCT':
            return (
                [...state,  action.payload.item]
            );
        default:
                return state    
    }
    
}


const rootreducer = combineReducers({
    user: userReducer,
    products: productReducer
})





export default rootreducer;