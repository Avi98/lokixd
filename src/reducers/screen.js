import { UPDATE_SCREEN_NAME, STORE_CURRENT_IMAGE } from "../actions/constants";

const initialState = {
    currentScreenName: 'search',
    screens: { 0: 'Search', 1: 'UserInfo', 2: 'UserGallery' },
    currentScreenPosition: 0,
    image: {}
}

export function Screen(state = initialState, actions) {

    switch (actions.type) {
        case UPDATE_SCREEN_NAME:
            return { ...state, currentScreenName: actions.screen, currentScreenPosition: actions.position }
        case STORE_CURRENT_IMAGE:
            return { ...state, image: action.data }
        default: return state
    }
}