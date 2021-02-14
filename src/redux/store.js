import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import foodReducer from './food/foodReducer';

const store = createStore(foodReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;
