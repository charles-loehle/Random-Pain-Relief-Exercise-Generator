import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="jumbotron">
        <div className="container">
          <h1 className="display-3">Random Pain Relief Exercise Generator</h1>
          <p>
            This app uses exercises from the Egoscue Method which is an
            effective way to re-align the body and reduce all sorts of pain. If
            you sit constantly and are experiencing pain, try a random exercise
            every hour!
          </p>
          <p>
            <Link className="btn btn-primary btn-lg" to="/main" role="button">
              Try it! &raquo;
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
