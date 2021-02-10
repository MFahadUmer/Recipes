import React from 'react';
import { useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import FoodDetails from '../component/FoodDetails';

const FoodDetailsContainer = ({ match }) => {
  const foodId = match.params.id;
  const foods = useSelector(state => state.foods.meals);
  const selectedFood = foods.filter(food => food.idMeal === foodId).map(food => (
    <FoodDetails
      key={food.idMeal}
      name={food.strMeal}
      category={food.strCategory}
      image={food.strMealThumb}
      strInstructions={food.strInstructions}
      strArea={food.strArea}
      strTags={food.strTags}
    />
  ));
  return (
    <div>
      {selectedFood}
    </div>
  );
};

FoodDetailsContainer.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired,
    }),
  }),
};

FoodDetailsContainer.defaultProps = {
  match: {},
};

export default FoodDetailsContainer;
