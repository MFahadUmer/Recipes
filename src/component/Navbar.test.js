import React from 'react';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import Navbar from './Navbar';
import '@testing-library/jest-dom';
import store from '../redux/store';

describe('Navbar Component Tests', () => {
  const eventHandler = jest.fn();

  it('should renders the text NYT Cooking', () => {
    render(
      <Provider store={store}>
        <Router>
          <Navbar eventHandler={eventHandler} />
        </Router>
      </Provider>,
    );
    expect(screen.getByText('NYT Cooking')).toBeTruthy();
  });

  it('matches the Navbar component snapshot', () => {
    const tree = renderer.create(
      <Provider store={store}>
        <Router>
          <Navbar eventHandler={eventHandler} />
        </Router>
      </Provider>,
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
