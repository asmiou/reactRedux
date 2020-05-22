import {SET_AUTHENTICATION, INCREMENT_ACTION_COUNT, INCREMENT_NUMBER} from "./actions-types";

export function setAuthentication(isLoggedIn) {
    return function (dispatch){
        dispatch({
        type: SET_AUTHENTICATION,
        payload: isLoggedIn
        });
    };
}

export function incrementActionCount() {
    return{
        type: INCREMENT_ACTION_COUNT
    };
}

export function incrementNumberAction() {
    return{
        type: INCREMENT_NUMBER
    };
}