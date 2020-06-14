import  React, {Component } from 'react';
import {Field, reduxForm} from 'redux-form';
import *  as actions  from '../actions';
import * as validations from "../validations"

import { connect } from 'react-redux';

const FIELDS ={ email :"email", password:"password", confirm: "confirm"};

class Register extends Component{

    handleSubmit = (credentials)=>{
        this.props.register(credentials, this.props.history)
    }

    renderInputComponent = (field) =>{
        return(
            <div className="form-group">
                <label className="bmd-label-floating">{field.label}</label>
                <input {...field.input} type={field.type} className="form-control"/>
                {field.meta.touched && field.meta.error && <span className="error">{field.meta.error}</span>}
            </div>   
        );
    };

    render(){
        const {handleSubmit, fields} = this.props;
        return(
            <div className="container pt-5">
                <div className="row justify-content-md-center">
                    <h1>
                        Inscription
                    </h1>
                </div>
                <form onSubmit={handleSubmit(this.handleSubmit)}>
                    <Field
                        name={FIELDS.email}
                        component={this.renderInputComponent}
                        type="text"
                        label="Email"
                        validate={[validations.required, validations.email]}
                    />
                    <Field
                        name={FIELDS.password}
                        component={this.renderInputComponent}
                        type="password"
                        label="Password"
                        validate = {validations.required}
                    />
                    <Field
                        name={FIELDS.confirm}
                        component={this.renderInputComponent}
                        type="password"
                        label="Confirm password"
                        validate={validations.required}
                    />
                    <div className="row justify-content-md-center">
                        <button type="submit" className="btn btn-primary btn-raised" >Incription</button>
                    </div>
                </form>
                
            </div>
        );
    }
}

function validate(formValues) {
    const errors ={};

    //errors.email = validations.email(formValues.email); 
    //errors.password =validations.required(formValues.email);
    errors.confirm = validations.samePassword(formValues.password, formValues.confirm);

    return errors;
}

const registerForm =reduxForm({
    form: "register",
    fields: Object.keys(FIELDS),
    validate
})(Register);

export default connect(null, actions)(registerForm)