import React from 'react';
import { Link } from 'react-router-dom';

const Success = () => (
  <div className="center-align">
    <h2 className="green-text">Survey Sent!</h2>
    <p>
      Check <Link to="/surveys">here</Link>
    </p>
  </div>
);

export default Success;
