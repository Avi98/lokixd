import { STORE_SEARCH_DATA } from "../actions/constants";

const initialState = {
    data: []
}

export function Search(state = initialState, actions) {
    switch (actions.type) {
        case STORE_SEARCH_DATA: return { ...state, data: actions.data }

        default: return state
    }
}