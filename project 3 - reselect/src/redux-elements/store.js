import {createStore} from 'redux'
import rootreducer from './rootreducer'
import {getPosts} from './fixtures';

const store = createStore(
    rootreducer, 
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.dispatch({type: 'RECEIVE_DATA', payload: getPosts()});

export default store;