import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import Foods from './Foods';
import store from '../redux/store';

describe('Foods Component Tests', () => {
  it('should display the name of food', () => {
    render(
      <Provider store={store}>
        <Router>
          <Foods foodName="Biryani" />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('Biryani')).toBeTruthy();
  });

  it('matches the Foods component snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Foods />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
