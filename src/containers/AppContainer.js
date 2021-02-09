// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFood } from '../redux/food/foodActions';
import Navbar from '../component/Navbar';
import FoodsContainer from './FoodsContainer';

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

  return (
    <div>
      <Navbar eventHandler={eventHandler} />
      <FoodsContainer category={category} foods={foods} loading={loading} error={error} />
    </div>
  );
};

export default AppContainer;
