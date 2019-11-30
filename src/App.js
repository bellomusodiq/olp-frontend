import React from 'react';
import logo from './logo.svg';
import './App.css';
import {doSomething} from './actions';
import {connect} from 'react-redux';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Header from './components/Header/Header';
import Home from './containers/Home/Home';
import Login from './containers/Login/Login';
import Signup from './containers/Signup/Signup';

class App extends React.Component {
  render() {

    return (
      <div className="App">
        <Router>
          <Header />
          <Switch>
            <Route path='/login' component={Login} />
            <Route path='/signup' component={Signup} />
            <Route path='/' component={Home} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const mapDispatchToProps ={
  doSomething: doSomething
}

export default connect(null, mapDispatchToProps)(App);
