import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions";

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
                        <a href="acceuil" className="nav-link">Accueil</a>
                    </li>
                    <li className="nav-item"> 
                        <a href="#"  className="nav-link">Ressources</a>
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