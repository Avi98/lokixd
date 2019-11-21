import { STORE_SEARCH_DATA, SET_USER_PRESSED_DATA } from "../actions/constants";

const initialState = {
    data: [],
    userPressedData:{}
}

export function Search(state = initialState, actions) {
    switch (actions.type) {
        case STORE_SEARCH_DATA: return { ...state, data: actions.data }
        case SET_USER_PRESSED_DATA: return { ...state, userPressedData: actions.data }

        default: return state
    }
}