import React, { Component } from 'react'

export default (ChildComponent)=>{
    class RequireAthentication extends Component {

        componentWillMount(){
            console.log("Bla bla bla ...")
        }

        render() {
            return <ChildComponent/>
        }
    }

    return RequireAthentication;
}
