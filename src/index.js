import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import './styles/index.css';
import AppContainer from './containers/AppContainer';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
