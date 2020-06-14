import {PARSE_ERROR,RESET_ERROR} from "../actions/actions-types";

const initialState = {
    message: ""
}

const ErrorsReducer=(state = initialState, action)=>{
    switch(action.type){
        case PARSE_ERROR:
            return {
                message : action.payload
            };
        case RESET_ERROR:
            return {
                message : ""
            };

        default:
            return state;
    }
}

export default ErrorsReducer;