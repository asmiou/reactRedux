import { INCREMENT_NUMBER } from './../actions/actions-types';
const initialState={
    listValues:[0]
}

export default function incrementNumberReducer (state = initialState, action){
    switch(action.type){
        case INCREMENT_NUMBER:
            return{
                listValues:[...state.listValues, state.listValues[state.listValues.length-1]+1]
            }

        default:
            return state;
    }
    
}