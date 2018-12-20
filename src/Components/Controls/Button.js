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
      image1: '',
      image2: '',
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
      image1: Exercises[rand].image1,
      image2: Exercises[rand].image2,
      instructions: Exercises[rand].instructions
    });
  }

  render() {
    return (
      <div>
        <button className="btn btn-lg btn-primary" onClick={this.handleClick}>Click for a random Exercise</button>
        <div className="container">
          <h2>{this.state.title}</h2>
          {this.state.image2 ? (
            <div>
              <img className="img-thumbnail mb-2" src={this.state.image1} alt="" />
              <img className="img-thumbnail mb-2" src={this.state.image2} alt="" />
              <p>{this.state.instructions}</p>
            </div>
          ) : (
              <div>
                <img className="img-thumbnail mb-2" src={this.state.image1} alt="" />
                <p>{this.state.instructions}</p>
              </div>
            )}
        </div>
      </div>
    )
  }
}

export default Button;