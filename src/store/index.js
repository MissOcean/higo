import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer,
    composeEnhancers(
        applyMiddleware(thunk)
    )
);
window.store = store;
export default store;