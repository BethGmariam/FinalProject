import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import RegisForm from './components/Form/RegisForm.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <div > 
          <RegisForm />
          </div>
        </header>
      </div>
    );
  }
}

export default App;
