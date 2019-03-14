import React, { Component } from "react";
import Exercises from "../../data/data";
import Airbench from "../../images/airbench.png";

class Button extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "Airbench",
      image1: Airbench,
      image2: "",
      instructions:
        "Hold for 2 minutes. Stand against a wall with your feet facing straight ahead. Your hips, upper back and head should be up against the wall. Walk your feet away from the wall approximately two to two and a half feet. Bend your knees and start sliding down the wall. Hold this position and keep the weight in your heels. Your lower back should be flush up against the wall."
    };
  }

  handleClick = () => {
    var rand = Math.floor(Math.random() * Exercises.length);
    //console.log(Exercises[rand].image);
    this.setState({
      id: Exercises[rand].id,
      title: Exercises[rand].title,
      image1: Exercises[rand].image1,
      image2: Exercises[rand].image2,
      instructionsTitle: Exercises[rand].instructionsTitle,
      instructions: Exercises[rand].instructions,
      purposeTitle: Exercises[rand].purposeTitle,
      purpose: Exercises[rand].purpose
    });
  };

  render() {
    return (
      <div className="row">
        <h3>{this.state.title}</h3>
        {this.state.image2 ? (
          <div className="row">
            <div className=" two-images col-md-6">
              <img
                className="img-thumbnail mb-2"
                src={this.state.image1}
                alt=""
              />
              <img
                className="img-thumbnail mb-2"
                src={this.state.image2}
                alt=""
              />
            </div>

            <div className="col-md-6">
              <h4>{this.state.instructionsTitle}</h4>
              <p>{this.state.instructions}</p>
              {/* <h4>{this.state.purposeTitle}</h4> */}
              {/* <p>{this.state.purpose}</p> */}
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="one-image col-md-6">
              <img
                className="img-thumbnail mb-2 img-fluid"
                src={this.state.image1}
                alt=""
              />
            </div>

            <div className="col-md-6">
              <h4>{this.state.instructionsTitle}</h4>
              <p>{this.state.instructions}</p>
              {/* <h4>{this.state.purposeTitle}</h4> */}
              {/* <p>{this.state.purpose}</p> */}
            </div>
          </div>
        )}
        <div className="text-center">
          <button className="btn btn-lg btn-primary" onClick={this.handleClick}>
            Click for a random Exercise
          </button>
        </div>

        {/* end main div */}
      </div>
    );
  }
}

export default Button;
