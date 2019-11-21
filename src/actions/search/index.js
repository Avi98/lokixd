import { STORE_SEARCH_DATA, SET_USER_PRESSED_DATA, UPDATE_SCREEN_NAME } from "../constants";

export function userData(data) {
    return {
        type: STORE_SEARCH_DATA,
        data
    }
}
export function setUserPressedData(data) {
    return (dispatch) => {
        dispatch({
            type:UPDATE_SCREEN_NAME,
            screen: 'UserInfo',
            position:1,
        })
        dispatch({
            type: SET_USER_PRESSED_DATA,
            data
        })
    }
}