import {
    SET_AUTHENTICATION, 
    INCREMENT_ACTION_COUNT, 
    INCREMENT_NUMBER, 
    LIST_USERS,
    PARSE_ERROR,
    RESET_ERROR
} 
    from "./actions-types";
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
            dispatch(parseError("Error: Bad crudential")) //On dispache l'erreur
        })
    }
}

export function logout(){
    return function(dispatch){
        dispatch(setAuthentication(false));
        localStorage.removeItem('token');

    }
}

export function register({email, password}, history){
    return function(dispatch){
        axios.post(`${base_url}/register`, {
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

export function listUsers(){
    return function(dispatch){
        axios.get(`${base_url}/users`, {
            headers: { authorization: localStorage.getItem('token')}
        })
        .then(response=>{
            dispatch(
                {
                    type: LIST_USERS,
                    payload: response.data.users
                })
        }).catch((error)=>{
            console.log(error);
        })
    }
}

export function parseError(error){
    return {
        type: PARSE_ERROR,
        payload: error
    }
}

export function resetError(){
    return {
        type: RESET_ERROR
    }
}