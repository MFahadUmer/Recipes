import axios from 'axios';
import { FETCH_FOOD_FAILURE, FETCH_FOOD_REQUEST, FETCH_FOOD_SUCCESS } from './foodActionTypes';

export const fetchFoodRequest = () => ({
  type: FETCH_FOOD_REQUEST,
});

export const fetchFoodSuccess = foods => ({
  type: FETCH_FOOD_SUCCESS,
  payload: foods,
});

export const fetchFoodFailure = error => ({
  type: FETCH_FOOD_FAILURE,
  payload: error,
});

export const fetchFood = () => dispatch => {
  dispatch(fetchFoodRequest());
  axios.get('https://www.themealdb.com/api/json/v1/1/search.php?f=c')
    .then(response => {
      const foods = response.data;
      dispatch(fetchFoodSuccess(foods));
    })
    .catch(error => {
      const errorMsg = error.message;
      dispatch(fetchFoodFailure(errorMsg));
    });
};
