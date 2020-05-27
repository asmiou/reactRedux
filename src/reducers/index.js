import { combineReducers } from "redux";
import AuthenticationReducer from "./authenticationReducer";
import ActionCountReducer from "./actionCount";
import incrementNumberReducer from './incrementNumberReducer';
import {reducer as form } from 'redux-form';

const rootReducer = combineReducers({
    authentication:AuthenticationReducer,
    actionCount: ActionCountReducer,
    numbers:incrementNumberReducer,
    form: form
});

export default rootReducer;
