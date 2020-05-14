import {incrementActionCount} from "../actions";
import {INCREMENT_ACTION_COUNT} from "../actions/actions-types";

export const actionCounterMiddleware = (store) => (next) => (action) =>{
    if(action.type!==INCREMENT_ACTION_COUNT){
        store.dispatch(incrementActionCount());
    }
    next(action);
};
    