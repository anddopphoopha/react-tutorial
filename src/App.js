import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Route from './scenes/Route';
import Header from './components/Header';
import Field from './components/Field';
import Button from './components/Button';
import Paper from './components/Paper';
import Login from './scenes/Login'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header name="John"/>
        <Route/>
      </div>
    );
  }
}

export default App;
