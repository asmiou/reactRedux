import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions";
import {Link} from "react-router-dom";

class Header extends Component {

    onClickAuthentication=()=>{
        this.props.setAuthentication(!this.props.isLoggedIn);
    };

    displayAuthLabel =()=>{
        if(this.props.isLoggedIn){
            return "Deconnexion"; 
        }else{
            return "Connexion";  
        } 
    };

    render() {
        return (
            <div>
                <ul className="nav nav-tab bg-primary">
                    <li className="nav-item">
                        <Link to="/" className="nav-link">Accueil</Link>
                    </li>
                    <li className="nav-item"> 
                        <Link to="/resources"  className="nav-link">Ressources</Link>
                    </li>
                    <li className="nav-item"> 
                        <a href="#"  className="nav-link" onClick={this.onClickAuthentication}>
                            {this.displayAuthLabel()}
                        </a>
                    </li>
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