import React, { Component } from 'react';
import { connect } from 'react-redux';
import {incrementNumberAction} from "../actions"
import { getListNumber, 
        getNumbersHavingOne, 
        getPrimeNumberList, 
        getPrimeNumberPair,
        getPrimeNumberHavingOne 
    } from './../selectors';


class Selectors extends Component {

    displayNumbers = (listNumber) =>{
        return listNumber.map(num => <li key={num}> { num }</li>)
    }

    render() {
        return (
            <div className="container row pt-3">
                <div className="col">
                    <button type="button" onClick={()=>this.props.incrementNumberAction()} 
                        className="btn btn-raised btn-primary">
                        Incrémenter
                    </button>
                </div>
                <div className="col">
                    Entiers
                    <ul>{this.displayNumbers(this.props.listNumber)}</ul>
                </div>
                <div className="col">
                    Contiennent "1"
                    <ul>{this.displayNumbers(this.props.numbersHavingOne)}</ul>
                </div>
                <div className="col">
                    Les nombres premiers
                    <ul>{this.displayNumbers(this.props.primeNumbers)}</ul>
                </div>
                <div className="col">
                    Les nombres premiers pairs
                    <ul>{this.displayNumbers(this.props.primeNumbersPair)}</ul>
                </div>
                <div className="col">
                    Les nombres premiers ayant 1
                    <ul>{this.displayNumbers(this.props.primeNumbersHavingOne)}</ul>
                </div>
            </div>
        );
    }
}

const mapSateToProps =(state)=>{
    return {
        listNumber : getListNumber(state),
        numbersHavingOne : getNumbersHavingOne(state),
        primeNumbers: getPrimeNumberList(state),
        primeNumbersPair: getPrimeNumberPair(state),
        primeNumbersHavingOne: getPrimeNumberHavingOne(state)
    }
}

const mapDispatchToProps = {
    incrementNumberAction
}

export default connect(mapSateToProps,mapDispatchToProps) (Selectors);