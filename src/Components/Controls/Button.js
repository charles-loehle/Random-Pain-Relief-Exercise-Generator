import React, { Component } from 'react';
//import Exercises from '../../exercises.json';
import Exercises from '../../data/data';
//import picture from '../../images/standing-arm-circles.png';

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: '',
      title: '',
      image: '',
      instructions: ''
    }

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var rand = Math.floor((Math.random() * Exercises.length));
    //console.log(Exercises[rand].image);
    this.setState({
      id: Exercises[rand].id,
      title: Exercises[rand].title,
      image: Exercises[rand].image,
      instructions: Exercises[rand].instructions
    });
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click for random Exercises</button>
        <div>
          <p>{this.state.title}</p>
          <img src={this.state.image} alt="" />
          <p>{this.state.instructions}</p>
        </div>
      </div>
    )
  }
}

export default Button;