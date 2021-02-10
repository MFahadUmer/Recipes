import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { fetchFood } from '../redux/food/foodActions';
import Navbar from '../component/Navbar';
import FoodsContainer from './FoodsContainer';
import FoodDetailsContainer from './FoodDetailsContainer';

const AppContainer = () => {
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
      <BrowserRouter>
        <Navbar eventHandler={eventHandler} />
        <Switch>
          <Route exact path="/">
            <FoodsContainer category={category} foods={foods} loading={loading} error={error} />
          </Route>
          <Route exact path="/foodDetails/:id" component={FoodDetailsContainer} />
        </Switch>
      </BrowserRouter>
    </div>
  );
};

export default AppContainer;
