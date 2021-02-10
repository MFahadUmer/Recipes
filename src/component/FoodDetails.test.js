import React from 'react';
import renderer from 'react-test-renderer';
import FoodDetails from './FoodDetails';

describe('Food Details Component Tests', () => {
  it('matches the Food Details component snapshot', () => {
    const tree = renderer.create(<FoodDetails />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
