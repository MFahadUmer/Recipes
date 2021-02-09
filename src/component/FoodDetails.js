import React from 'react';
import FoodDetailsInfo from './FoodDetailsInfo';

const FoodDetails = ({
  // eslint-disable-next-line react/prop-types,no-unused-vars
  name, category, image, strInstructions, strArea, strTags,
}) => (
  <div className="foodDetailsContainer">
    <div>
      <img className="foodDetailsImage" src={image} alt={name} />
    </div>
    <div className="foodDetailsInfo">
      <h2 className="foodDetailsHeader">Food Details</h2>
      <FoodDetailsInfo name="Name" value={name} />
      <FoodDetailsInfo name="Category" value={category} />
      <FoodDetailsInfo name="Area Specific" value={strArea} />
      <FoodDetailsInfo name="Tags" value={strTags} />
      <FoodDetailsInfo name="Instructions" value={strInstructions} />
    </div>
  </div>
);

export default FoodDetails;
