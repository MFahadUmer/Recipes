// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFood } from '../redux/food/foodActions';
import CategoriesContainer from './CategoriesContainer';

const AppContainer = () => {
  // eslint-disable-next-line no-unused-vars
  const [category, setCategory] = useState('All');
  const foods = useSelector(state => state.foods.meals);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();
  const eventHandler = e => {
    setCategory(e.target.value);
  };
  useEffect(() => {
    dispatch(fetchFood());
  }, []);
  let data;
  let filterBooks = '';
  if (loading) {
    data = 'loading';
  } else if (error) {
    data = 'Error Occured';
  } else {
    data = foods;
    if (category === 'All' || '') {
      filterBooks = data.map(food => <h2 key={food.strMeal}>{food.strMeal}</h2>);
    } else {
      // eslint-disable-next-line max-len
      filterBooks = data.filter(food => food.strCategory === category).map(food => <h2 key={food.strMeal}>{food.strMeal}</h2>);
    }
  }
  return (
    <div>
      <CategoriesContainer eventHandler={eventHandler} />
      <div>{filterBooks}</div>
    </div>
  );
};

export default AppContainer;
