import {applyMiddleware, compose, createStore} from 'redux';
import reducer from './reducers';
import {composeWithDevTools} from 'redux-devtools-extension';
import { install } from 'redux-loop';
import thunk from 'redux-thunk';

const enhancer = compose(
    applyMiddleware(thunk),
    install(),
);


const store = createStore(reducer, composeWithDevTools(enhancer));

export default store;
