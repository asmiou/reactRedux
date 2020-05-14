import { combineReducers } from "redux";
import AuthenticationReducer from "./authenticationReducer";
import ActionCountReducer from "./actionCount";

const rootReducer = combineReducers({
    authentication:AuthenticationReducer,
    actionCount: ActionCountReducer
});

export default rootReducer;
