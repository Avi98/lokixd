import { STORE_SEARCH_DATA } from "../constants";

export function userData(data) {
    return {
        type: STORE_SEARCH_DATA,
        data
    }
}