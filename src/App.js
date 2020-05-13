import React, { Component } from 'react'
import Header from "./containers/header";
import { Route, Switch } from 'react-router';
import Home from './components/home';
import Resources from './components/resources';

require("./App.css");

export default class App extends Component {
  render() {
    return (<>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/resources" component={Resources}/>
      </Switch>
    </>);
  };
}