import React, { Component } from 'react';
import './App.css';
import Output from './Components/Output';
import Select from './Components/Controls/Select';
import Text from './Components/Controls/Text';
import Exercises from './exercises.json';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      paras: 4,
      html: true,
      text: ''
    }
  }

  componentWillMount() {
    this.getSampleText();
  }

  getSampleText() {
    {
      Exercises.map(exercise => {
        console.log(exercise.title);
      })
    }
    // axios.get('https://baconipsum.com/api/?type=meat-and-filler&paras=' + this.state.paras + '&html=' + this.state.html)
    // this.setState({ text: response.data }, function () {
    //   // console.log(this.state);
    // });
    // })
    // .catch(err => console.log(err));
  }

  showHtml(x) {
    // update html property in state, then call getSampleText to update the request
    this.setState({ html: x }, this.getSampleText);
  }

  changeParas(number) {
    // update paras property in state, then call getSampleText to update the request
    this.setState({ paras: number }, this.getSampleText);
  }

  render() {
    return (
      <div className="App">
        <h1 className="text-center">Random Pain Relief Exercise Generator</h1>
        <hr />
        <form className="form-inline">
          <div className="form-group">
            <label>Paragraphs:</label>
            <Text value={this.state.paras} onChange={this.changeParas.bind(this)} />
          </div>
          <div className="form-group">
            <label>Include HTML:</label>
            <Select value={this.state.html} onChange={this.showHtml.bind(this)} />
          </div>
        </form>
        <br />
        <Output value={this.state.text} />
      </div>
    );
  }
}

export default App;
