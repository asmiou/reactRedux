import React, { Component } from 'react'
import Header from "./containers/header";
import { Route, Switch } from 'react-router';
import Home from './components/home';
import Resources from './components/resources';
import RequireAuthentication from './helpers/require-authentication';
import TodoApp from './components/todo-app';
import Selectors from './containers/selectors';

require("./App.css");

export default class App extends Component {
  render() {
    return (<>
      <Header/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/todo" component={TodoApp}/>
        <Route exact path="/selector" component={Selectors}/>
        <Route exact path="/resources" component={RequireAuthentication(Resources)}/>
      </Switch>
    </>);
  };
}