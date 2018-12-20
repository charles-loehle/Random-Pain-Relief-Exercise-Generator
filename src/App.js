import React, { Component } from 'react';
import './App.css';
import Button from './Components/Controls/Button';

class App extends Component {
  render() {
    return (
      <div className="App text-center">
        <h1>Random Pain Relief Exercise Generator</h1>
        <hr />
        <Button />
      </div>
    );
  }
}

export default App;
