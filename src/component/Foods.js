import React from 'react';
import { Link } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const Foods = ({ uniqueKey, foodName, foodImage }) => (
  <div className="foods">
    <img className="foodImage" src={foodImage} alt={foodName} />
    <Link to={`/foodDetails/${uniqueKey}`}>
      <div className="foodName">
        {foodName}
      </div>
    </Link>
  </div>
);

export default Foods;
