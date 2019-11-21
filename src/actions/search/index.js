import { STORE_SEARCH_DATA, SET_USER_PRESSED_DATA, UPDATE_SCREEN_NAME } from "../constants";

export function userData(data) {
    return {
        type: STORE_SEARCH_DATA,
        data
    }
}

export function updateScreenPosition({name, position}){
    return {
        type:UPDATE_SCREEN_NAME,
        screen: name,
        position,
    }
}
export function setUserPressedData(data) {
    return (dispatch) => {
        dispatch(updateScreenPosition({name:'UserInfo', position:1}))
        dispatch({
            type: SET_USER_PRESSED_DATA,
            data
        })
    }
}