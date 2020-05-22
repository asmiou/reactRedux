import {createSelector } from "reselect"
import loadash from "lodash";

export const getListNumber = state =>{
    return state.numbers.listValues
}

export const getNumbersHavingOne = state =>{
    return getListNumber(state).filter(
        num => num.toString().indexOf('1')>-1
    );
}

const getPairNumber = state =>{
    return getListNumber(state).filter(
        num => num%2 === 0
    );
}

function isPrimeNumber(value) {
    for(var i = 2; i<value; i++){
        if(value%i===0){
            return false;
        }
    }
    return value > 1;
}

export const getPrimeNumberList = state =>{
    return getListNumber(state).filter(num => isPrimeNumber(num));
}


export const getPrimeNumberHavingOne = createSelector(
    getNumbersHavingOne,
    getPrimeNumberList,
    (havingOne, primeNumber)=>{
        return loadash.intersection(havingOne, primeNumber);
    }
);

export const getPrimeNumberPair = createSelector(
    getPairNumber,
    getPrimeNumberList,
    (pairNumber, primeNumber)=>{
        return loadash.intersection(pairNumber, primeNumber);
    }
);