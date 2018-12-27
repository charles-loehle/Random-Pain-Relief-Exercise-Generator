import React, { Component } from 'react'
import './App.css'
//import Button from './Components/Controls/Button'
import Navbar from './Components/Navbar'
import { BrowserRouter, Route } from 'react-router-dom'
import Home from './Components/Home'
import Main from './Components/Main'
// import Home from './Components/Home'
// import Main from './Components/Main'

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
          <Route exact path='/' component={Home} />
          <Route path='/main' component={Main} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
