import React, { Component } from 'react';

class Content extends Component {

  render() {
    return (
      <div>
        <div className="container">
          <h2>{this.state.title}</h2>
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
        </div>
      </div>
    )
  }
}

export default Content;