import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import reducers from 'reducers';
import thunkMiddleware from 'redux-thunk';
import createLogger from 'redux-logger';

const initialMiddleware = [thunkMiddleware];

if (process.env.NODE_ENV !== 'production') {
    initialMiddleware.push(createLogger({}));
}

const store = createStore(combineReducers(reducers), compose(applyMiddleware(...initialMiddleware)));

export default store;