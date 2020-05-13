import {SET_AUTHENTICATION} from "../actions/actions-types";

const initialState = {
    isLoggedIn: false
}

const AuthenticationReducer=(state = initialState, action)=>{
    switch(action.type){
        case SET_AUTHENTICATION:
            return {
                isLoggedIn : action.payload
            };

        default:
            return state;
    }
}

export default AuthenticationReducer;