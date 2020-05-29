import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions";
import {Link} from "react-router-dom";

class Header extends Component {

    displayAuthLabel =()=>{
        if(this.props.isLoggedIn){
            return "Deconnexion"; 
        }else{
            return "Connexion";  
        } 
    };

    displayAuthLink = ()=>{
        if(this.props.isLoggedIn){
            return (
                <li className="nav-item"> 
                    <Link to="/login"  className="nav-link" >
                        {this.displayAuthLabel()}
                    </Link>
                </li>)
        }else{
            return (
                [
                <li key="1" className="nav-item"> 
                    <Link to="/login"  className="nav-link" >
                        {this.displayAuthLabel()}
                    </Link>
                </li>,
                <li key="2" className="nav-item"> 
                    <Link to="/register"  className="nav-link" >
                        Inscription
                    </Link>
                </li>
                ]
            )
        }
    }

    render() {
        return (
            <div className="mr-0">
                <ul className="nav nav-tab bg-primary">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Accueil</Link>
                    </li>
                    <li className="nav-item"> 
                        <Link to="/resources"  className="nav-link">Ressources</Link>
                    </li>
                    <li className="nav-item"> 
                        <Link to="/todo"  className="nav-link">Todo</Link>
                    </li>
                    <li className="nav-item"> 
                        <Link to="/selector"  className="nav-link">Selector</Link>
                    </li>
                    {this.displayAuthLink()}
                </ul>
            </div>
        );
    }
}

const mapStateToProps = (state) =>{
    return {
        isLoggedIn: state.authentication.isLoggedIn
    };
}


export default connect(mapStateToProps,actions)(Header);