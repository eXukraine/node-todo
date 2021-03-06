import { createStore, applyMiddleware, compose} from 'redux';
import thunk from 'redux-thunk';
import rootReduser from './redusers';

const initalState = {};

const middleware = [thunk];

const store = createStore(rootReduser, initalState, compose(
    applyMiddleware(...middleware),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
))

export default store;