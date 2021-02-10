import React from 'react';
import renderer from 'react-test-renderer';
import FoodDetailsContainer from './FoodDetailsContainer';

describe('Food Details Container Tests', () => {
  it('matches the Food Details Container snapshot', () => {
    const tree = renderer.create(<FoodDetailsContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
