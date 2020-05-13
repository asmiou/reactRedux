import { combineReducers } from "redux";
import AuthenticationReducer from "./authenticationReducer";

const rootReducer = combineReducers({
    authentication:AuthenticationReducer
});

export default rootReducer;
