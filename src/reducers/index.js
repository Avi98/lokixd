import { createStore } from 'redux'
import { Search } from './search'

export const store = createStore(Search, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())