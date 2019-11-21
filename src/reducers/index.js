import { createStore } from 'redux'
import { Search } from './search'
import {Screen} from "./screen";
import {  combineReducers } from "redux";

const reducers = combineReducers({Search, Screen})

export const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())