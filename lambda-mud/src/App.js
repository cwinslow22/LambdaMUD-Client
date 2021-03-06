// Main parent component that has links and routes to the other components

import React, { Component } from 'react';
import './App.css';
import { Route } from "react-router-dom";
import Register from './components/Registration';
import {  Link } from "react-router-dom";
import Login from './components/Login';
import Adventure from './components/Adventure';

class App extends Component {


  render() {
    return (
      <div className="App">
        <Link to='/register' ><button type='button'>Register</button></Link>
        <Link to='/login' ><button type='button'>Login</button></Link>
        <Link to='/' ><button type='button'>Let's Play</button></Link>
        <Route  path='/register' component={Register} />
        <Route  path='/login' component={Login} />
        <Route exact path='/' component={Adventure} />
      </div>
    );
  }
}

export default App;
