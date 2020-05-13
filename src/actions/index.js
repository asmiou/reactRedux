import {SET_AUTHENTICATION} from "./actions-types";

export function setAuthentication(isLoggedIn) {
    return{
        type: SET_AUTHENTICATION,
        payload: isLoggedIn
    };
}