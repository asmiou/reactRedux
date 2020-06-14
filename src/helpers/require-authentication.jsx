import React, { Component } from 'react'
import { connect } from 'react-redux';

export default (ChildComponent)=>{
    class RequireAthentication extends Component {
        
        constructor(props){
            super(props);
            if(!this.props.isLoggedIn){
                this.props.history.push("/")
            }
        }

        getSnapshotBeforeUpdate(prevProps, prevState) {
            return {
                isLoggedIn:prevProps.isLoggedIn
            }
        }
    
        componentDidUpdate(prevProps, prevState, propsBeforeUpdate) {
            if(!propsBeforeUpdate.isLoggedIn){
                this.props.history.push("/")
            } 
        }

        render() {
            return this.props.isLoggedIn && <ChildComponent/>
        }
    }

    const mapStateToProps = (state) =>({
            isLoggedIn: state.authentication.isLoggedIn
    });

    return connect(mapStateToProps)(RequireAthentication);
}
