import React, { useState } from 'react';
import Exercises from '../data/data';
import Airbench from '../images/airbench.png';
import './Exercise.css';

const Exercise = () => {
  const [title, setTitle] = useState('Airbench');
  const [image1, setImage1] = useState(Airbench);
  const [image2, setImage2] = useState('');
  const [instructions, setInstructions] = useState(
    'Hold for 2 minutes. Stand against a wall with your feet facing straight ahead. Your hips, upper back and head should be up against the wall. Walk your feet away from the wall approximately two to two and a half feet. Bend your knees and start sliding down the wall. Hold this position and keep the weight in your heels. Your lower back should be flush up against the wall.'
  );

  const handleClick = () => {
    let rand = Math.floor(Math.random() * Exercises.length);
    setTitle(Exercises[rand].title);
    setImage1(Exercises[rand].image1);
    setImage2(Exercises[rand].image2);
    setInstructions(Exercises[rand].instructions);
  };

  return (
    <div className="Exercise margin-top-2">
      <div className="exercise-button-container text-center">
        <button className="btn btn-primary" onClick={handleClick}>
          Click for a random Exercise
        </button>
      </div>
      {image2 ? (
        <div className="row margin-top-1">
          <div className="primary col text-center">
            <img className="img-thumbnail" src={image1} alt="" />
            <img className="img-thumbnail mb-2" src={image2} alt="" />
          </div>

          <div className="secondary col">
            <h4>{title}</h4>
            <p>{instructions}</p>
          </div>
        </div>
      ) : (
        <div className="row margin-top-2">
          <div className="primary col text-center">
            <img className="img-thumbnail mb-2" src={image1} alt="" />
          </div>

          <div className="secondary col">
            <h4>{title}</h4>
            <p>{instructions}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Exercise;
