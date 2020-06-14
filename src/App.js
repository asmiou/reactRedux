import React, { Component } from 'react'
import Header from "./containers/header";
import { Route, Switch } from 'react-router';
import Home from './components/home';
import Resources from './components/resources';
import RequireAuthentication from './helpers/require-authentication';
import TodoApp from './components/todo-app';
import Selectors from './containers/selectors';
import LoginForm from './containers/login';
import Logout from './containers/logout';
import Register from './containers/register';
import Errors from "./containers/errors"

require("./App.css");

export default class App extends Component {
  render() {
    return (<>
      <Header/>
      <Errors/>
      <Switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/login" component={LoginForm}/>
        <Route exact path="/logout" component={Logout}/>
        <Route exact path="/register" component={Register}/>
        <Route exact path="/todo" component={TodoApp}/>
        <Route exact path="/selector" component={Selectors}/>
        <Route exact path="/resources" component={RequireAuthentication(Resources)}/>
      </Switch>
    </>);
  };
}
