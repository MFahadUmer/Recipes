import {
  FETCH_FOOD_FAILURE,
  FETCH_FOOD_REQUEST,
  FETCH_FOOD_SUCCESS,
} from './foodActionTypes';

const initialState = {
  loading: false,
  foods: { meals: [] },
  error: '',
};

const foodReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FOOD_REQUEST: return {
      ...state,
      loading: true,
    };
    case FETCH_FOOD_SUCCESS: return {
      loading: false,
      foods: action.payload,
      error: '',
    };
    case FETCH_FOOD_FAILURE: return {
      loading: false,
      error: action.payload,
    };
    default: return state;
  }
};

export default foodReducer;
