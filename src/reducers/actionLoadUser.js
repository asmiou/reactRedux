import {LIST_USERS} from "../actions/actions-types";

const initialState = {
    users: []
}

const LoadUserReducer=(state = initialState, action)=>{
    switch(action.type){
        case LIST_USERS:
            return {
                ...state,
                users : action.payload
            };

        default:
            return state;
    }
}

export default LoadUserReducer;