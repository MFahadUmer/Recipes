import React from 'react';
import renderer from 'react-test-renderer';
import FoodDetailsInfo from '../component/FoodDetailsInfo';

describe('Food Details Information Component Tests', () => {
  it('matches the Food Details Information component snapshot', () => {
    const tree = renderer.create(<FoodDetailsInfo />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
