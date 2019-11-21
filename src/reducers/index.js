import { createStore , applyMiddleware, compose} from 'redux'
import { Search } from './search'
import {Screen} from "./screen";
import thunk from 'redux-thunk';
import {  combineReducers } from "redux";

const reducers = combineReducers({Search, Screen})

export const store = createStore(reducers, compose(applyMiddleware(thunk)))