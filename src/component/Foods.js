import React from 'react';

// eslint-disable-next-line react/prop-types
const Foods = ({ foodName, foodImage }) => (
  <div className="foods">
    <img className="foodImage" src={foodImage} alt={foodName} />
    <div className="foodName">{foodName}</div>
  </div>
);

export default Foods;
