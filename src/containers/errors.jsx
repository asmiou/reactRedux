import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions";
import { withRouter } from 'react-router';

function mapStateToProps(state) {
    return {
        error:state.errors.message
    };
}

class Errors extends Component {
    componentDidUpdate(prevProps, prevState){
        if(this.props.location!==prevProps.location){
            this.props.resetError();
        }
    }

    render() {
        return (
            this.props.error&&
            <div className="alert alert-danger" role="alert">
                {this.props.error}
            </div>
        );
    }
}

export default withRouter(connect(
    mapStateToProps,actions
)(Errors));