import {SET_AUTHENTICATION, INCREMENT_ACTION_COUNT, INCREMENT_NUMBER} from "./actions-types";
import axios from "axios";
const base_url = "http://localhost:3090";

export function setAuthentication(isLoggedIn) {
    return {
            type: SET_AUTHENTICATION,
            payload: isLoggedIn
        };
}

export function incrementActionCount() {
    return{
        type: INCREMENT_ACTION_COUNT
    };
}

export function incrementNumberAction() {
    return{
        type: INCREMENT_NUMBER
    };
}

export function login({email, password}, history){
    return function(dispatch){
        axios.post(`${base_url}/login`, {
            email,
            password
        }).then((response)=>{
            localStorage.setItem('token', response.data.token);
            dispatch(setAuthentication(true));
            history.push('/resources')
        }).catch((error)=>{
            console.log(error);
        })
    }
}

export function logout(){
    return function(dispatch){
        dispatch(setAuthentication(false));
        localStorage.removeItem('token');

    }
}