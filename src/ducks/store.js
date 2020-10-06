// IMPORT THE REDUX FUNCTIONS, MIDDLEWARE, AND REDUCERS THAT WILL BE USED TO CREATE A STORE
import { createStore, applyMiddleware, combineReducers } from 'redux';
import promiseMiddleware from 'redux-promise-middleware';
import budgetReducer from './budgetReducer';
import userReducer from './userReducer';

const rootReducer = combineReducers({
  budget: budgetReducer
})

export default createStore(rootReducer, applyMiddleware(promiseMiddleware));