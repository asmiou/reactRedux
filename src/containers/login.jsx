import  React, {Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import *  as actions  from '../actions';

import { connect } from 'react-redux';

const FIELDS ={ email :"email", password:"password"};

class Login extends Component{
    handleSubmit = ()=>{

    }

    render(){
        return(
            <div className="container pt-5">
                <form onSubmit={this.props.handleSubmit(this.handleSubmit)}>
                    <div className="row justify-content-md-center">
                        <h1>
                            Connexion
                        </h1>
                    </div>
                    <div className="row justify-content-md-center">
                        <fieldset className="col-md-4 form-group">
                            <label htmlFor="" className="bmd-label-floatin">Email</label>
                            <Field name={FIELDS.email} type="text" className="form-control" component="input"/>
                        </fieldset>
                    </div>
                    <div className="row justify-content-md-center">
                        <fieldset className="col-md-4 form-group">
                            <label htmlFor="" className="bmd-label-floatin">Password</label>
                            <Field name={FIELDS.password} type="password" className="form-control" component="input"/>
                        </fieldset>
                    </div>
                    <div className="row justify-content-md-center">
                        <button className="btn btn-primary btn-raise">Login</button>
                    </div>
                </form>
            </div>
        );
    }
}

const loginForm =reduxForm({
    form: "login",
    fields: Object.keys(FIELDS)
})(Login);

export default connect(null, actions)(loginForm)