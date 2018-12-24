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
      instructionsTitle: Exercises[rand].instructionsTitle,
      instructions: Exercises[rand].instructions,
      purposeTitle: Exercises[rand].purposeTitle,
      purpose: Exercises[rand].purpose,

    });
  }

  render() {
    return (
      <div>
        <div className="text-center">
          <button className="btn btn-lg btn-primary" onClick={this.handleClick}>Click for a random Exercise</button>
        </div>
        <h3>{this.state.title}</h3>
        {this.state.image2 ? (
          <div>
            <img className="img-thumbnail mb-2" src={this.state.image1} alt="" />
            <img className="img-thumbnail mb-2" src={this.state.image2} alt="" />
            <h4>Instructions</h4>
            <p>{this.state.instructions}</p>
            <h4>{this.state.purposeTitle}</h4>
            <p>{this.state.purpose}</p>
          </div>
        ) : (
            <div>
              <img className="img-thumbnail mb-2" src={this.state.image1} alt="" />
              <h4>{this.state.instructionsTitle}</h4>
              <p>{this.state.instructions}</p>
              <h4>{this.state.purposeTitle}</h4>
              <p>{this.state.purpose}</p>
            </div>
          )}

        {/* end main div */}
      </div >
    )
  }
}

export default Button;