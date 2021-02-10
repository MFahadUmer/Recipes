import React from 'react';
import PropTypes from 'prop-types';
import FoodDetailsInfo from './FoodDetailsInfo';

const FoodDetails = ({
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

FoodDetails.propTypes = {
  name: PropTypes.string,
  category: PropTypes.string,
  image: PropTypes.string,
  strInstructions: PropTypes.string,
  strArea: PropTypes.string,
  strTags: PropTypes.string,
};

FoodDetails.defaultProps = {
  name: '',
  category: '',
  image: '',
  strInstructions: '',
  strArea: '',
  strTags: '',
};

export default FoodDetails;
