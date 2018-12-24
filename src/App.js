import React, { Component } from 'react';
import './App.css';
import Button from './Components/Controls/Button';
//import Content from './Components/Content';

class App extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="text-center">
            <h2>Random Pain Relief Exercise Generator</h2>
          </div>
          <hr />
          <Button />
        </div>
      </div>
    );
  }
}

export default App;
