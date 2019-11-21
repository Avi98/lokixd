import { UPDATE_SCREEN_NAME } from "../constants";
export function updateScreenPosition({ name, position }) {
    return {
        type: UPDATE_SCREEN_NAME,
        screen: name,
        position,
    };
}

