import React from 'react';
import { useSelector } from 'react-redux';

// eslint-disable-next-line react/prop-types,no-unused-vars
const CategoriesContainer = ({ eventHandler }) => {
  const categories = ['All'];
  const foods = useSelector(state => state.foods.meals);
  if (foods) {
    foods.map(food => {
      if (!categories.includes(food.strCategory)) {
        categories.push(food.strCategory);
      }
      return categories;
    });
  }
  return (
    <select className="selectCategory" name="categories" id="categories" onChange={eventHandler}>
      {/* eslint-disable-next-line max-len */}
      {categories.map(food => <option className="selectCategory" key={food} value={food}>{food}</option>)}
    </select>
  );
};

export default CategoriesContainer;
