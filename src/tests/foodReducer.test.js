import {
  FETCH_FOOD_REQUEST,
  FETCH_FOOD_SUCCESS,
  FETCH_FOOD_FAILURE,
} from '../redux/food/foodActionTypes';
import foodReducer from '../redux/food/foodReducer';

describe('Food Reducer tests', () => {
  it('should return default state', () => {
    const state = foodReducer(undefined, {});
    expect(state).toEqual({
      error: '',
      foods: {
        meals: [],
      },
      loading: false,
    });
  });

  it('should return state with loading as true', () => {
    const state = foodReducer(undefined, {
      type: FETCH_FOOD_REQUEST,
    });
    expect(state).toEqual({
      error: '',
      foods: {
        meals: [],
      },
      loading: true,
    });
  });

  it('should return state with loading as true', () => {
    const state = foodReducer(undefined, {
      type: FETCH_FOOD_FAILURE,
      payload: 'There is some error',
    });
    expect(state).toEqual({
      error: 'There is some error',
      loading: false,
    });
  });

  it('should return state with loading as true', () => {
    const state = foodReducer(undefined, {
      type: FETCH_FOOD_SUCCESS,
      payload: { idMeal: 1, strMeal: 'Biryani' },
    });
    expect(state).toEqual({
      error: '',
      foods: {
        idMeal: 1,
        strMeal: 'Biryani',
      },
      loading: false,
    });
  });
});
