import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from "../actions";

function mapStateToProps(state) {
    return {
        users: state.data.users
    };
}

class Resources extends Component {

    constructor(props){
        super(props);
        this.props.listUsers();

    }

    renderUserList = () => {
        return this.props.users.map((user, i) => {
            return (<div key={i} className="list-group-item list-group-item-action flex-column align-items-start">
                {user.email}
            </div>)
        })

    }
    render() {
        return (
            <div className="container pt-5">
                <h4>Liste de utilisateurs</h4>
                <div className="row">
                    {this.renderUserList()}
                </div>
            </div>
        );
    }
}

export default connect(
    mapStateToProps,actions
)(Resources);

