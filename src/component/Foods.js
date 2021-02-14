import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

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

Foods.propTypes = {
  uniqueKey: PropTypes.string,
  foodName: PropTypes.string,
  foodImage: PropTypes.string,
};

Foods.defaultProps = {
  uniqueKey: '',
  foodName: '',
  foodImage: '',
};

export default Foods;
