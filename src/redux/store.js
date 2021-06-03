import {createStore} from 'redux';
import reducers from './reducers/index'

// it takes arguments: reducers, middleword, 
// and state as arguments. you can write an emptu state : {})
const store = createStore(
    reducers, 
    {},
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    );

export default store;