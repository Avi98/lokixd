import { STORE_SEARCH_DATA, SET_USER_PRESSED_DATA } from "../constants";
import { updateScreenPosition } from "../updateScreen/updateScreen";

export function userData(data) {
    return {
        type: STORE_SEARCH_DATA,
        data
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