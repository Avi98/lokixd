import { UPDATE_SCREEN_NAME } from "../actions/constants";

const initialState = {
    currentScreenName: 'search',
    screens: { 0: 'Search', 1: 'UserInfo', 2: 'UserGallery' },
    currentScreenPosition: 0
}

export function Screen(state = initialState, actions) {

    switch (actions.type) {
        case UPDATE_SCREEN_NAME: 
        return { ...state, currentScreenName: actions.screen, currentScreenPosition: actions.position }
        default: return state
    }
}