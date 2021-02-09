import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppContainer from './containers/AppContainer';
import store from './redux/store';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppContainer />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root'),
);
