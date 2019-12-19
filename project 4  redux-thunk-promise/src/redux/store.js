import { createStore, applyMiddleware ,compose} from 'redux'
import thunk from 'redux-thunk';
import rootreducer from './combineReducer'

const initialState = {
    user: "initial name",
    products: [{ product: 'initial product' }]
};

const store = createStore(
    rootreducer, 
    initialState,
    compose(
        applyMiddleware(thunk),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
    
);

export default store;
