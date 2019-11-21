import { UPDATE_SCREEN_NAME, STORE_CURRENT_IMAGE } from "../constants";


export function setToGallery(data){
    return dispatch =>{
        dispatch(updateScreenPosition({name:'UserGallery', position:3}))
        dispatch({type: STORE_CURRENT_IMAGE, data})
    }
}

export function updateScreenPosition({ name, position }) {
    return {
        type: UPDATE_SCREEN_NAME,
        screen: name,
        position,
    };
}

