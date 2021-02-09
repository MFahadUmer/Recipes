import React from 'react';
import { useSelector } from 'react-redux';
import FoodDetails from '../component/FoodDetails';

// eslint-disable-next-line react/prop-types
const FoodDetailsContainer = ({ match }) => {
  // eslint-disable-next-line react/prop-types
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

export default FoodDetailsContainer;
