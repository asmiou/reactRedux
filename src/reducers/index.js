import { combineReducers } from "redux";
import AuthenticationReducer from "./authenticationReducer";
import ActionCountReducer from "./actionCount";
import incrementNumberReducer from './incrementNumberReducer';

const rootReducer = combineReducers({
    authentication:AuthenticationReducer,
    actionCount: ActionCountReducer,
    numbers:incrementNumberReducer
});

export default rootReducer;
