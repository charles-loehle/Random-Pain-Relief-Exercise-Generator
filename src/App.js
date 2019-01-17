import React, { Component } from 'react'
import './App.css'
import { HashRouter, Route } from 'react-router-dom'
import Home from './Components/Home'
import Main from './Components/Main'

class App extends Component {
  render() {
    return (
      <HashRouter>
        <div>
          <Route exact path='/' component={Home} />
          <Route path='/main' component={Main} />
        </div>
      </HashRouter>
    );
  }
}

export default App;
