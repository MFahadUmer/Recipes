import React from 'react';
import PropTypes from 'prop-types';

const FoodDetailsInfo = ({ name, value }) => (
  <div className="foodDetailsInfoStyles">
    <div className="foodInfoName">{name}</div>
    <div className="foodInfoValue">{value}</div>
  </div>
);

FoodDetailsInfo.propTypes = {
  name: PropTypes.string,
  value: PropTypes.string,
};

FoodDetailsInfo.defaultProps = {
  name: '',
  value: '',
};

export default FoodDetailsInfo;
