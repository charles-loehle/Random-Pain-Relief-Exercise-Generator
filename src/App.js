import './css/base.css';
import './css/flexbox.css';
import React from 'react';
import { HashRouter, Route } from 'react-router-dom';
import Landing from './components/Landing';
import Exercise from './components/Exercise';

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Route exact path="/" component={Landing} />
        <Route exact path="/main" component={Exercise} />
      </div>
    </HashRouter>
  );
}

export default App;
