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

  state = {
    username: ''
  }

  submit = username => {
    this.setState({
      username
    })
  }

  render() {
    const { username } = this.state
    return (
       <div className="App">
        <Header name={username}/>
        <Route usernameSubmit={this.submit}/>
      </div>
    );
  }
}

export default App;
