import { combineReducers } from "redux";
import AuthenticationReducer from "./authenticationReducer";
import ActionCountReducer from "./actionCount";
import incrementNumberReducer from './incrementNumberReducer';
import {reducer as form } from 'redux-form';
import LoadUserReducer from "./actionLoadUser";
import ErrorsReducer from './errorsReducer';

const rootReducer = combineReducers({
    authentication:AuthenticationReducer,
    actionCount: ActionCountReducer,
    numbers:incrementNumberReducer,
    data:LoadUserReducer,
    errors:ErrorsReducer,
    form: form
});

export default rootReducer;
