import React from 'react';

// eslint-disable-next-line react/prop-types
const FoodDetailsInfo = ({ name, value }) => (
  <div className="foodDetailsInfoStyles">
    <div className="foodInfoName">{name}</div>
    <div className="foodInfoValue">{value}</div>
  </div>
);

export default FoodDetailsInfo;
