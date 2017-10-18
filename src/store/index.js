import {createStore, applyMiddleware,compose} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducers'
import {routerMiddleware} from 'react-router-redux'
import createHashHistory from 'history/createHashHistory'
const history = createHashHistory()
const routeWare = routerMiddleware(history)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(reducer,
    composeEnhancers(
        applyMiddleware(routeWare,thunk)
    )
);
window.store = store;
export default store;