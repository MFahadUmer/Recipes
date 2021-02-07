import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFood } from '../redux/food/foodActions';

const App = () => {
  const foods = useSelector(state => state.foods.meals);
  const loading = useSelector(state => state.loading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchFood());
  }, []);
  return loading === true ? (
    <h2>Loading</h2>
  ) : error ? (
    <div>Error Occured</div>
  ) : (
    <div>
      {foods.map(food => <p key={food.strMeal}>{food.strMeal}</p>)}
    </div>
  );
};

export default App;
