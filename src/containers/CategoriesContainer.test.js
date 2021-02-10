import React from 'react';
import renderer from 'react-test-renderer';
import CategoriesContainer from './CategoriesContainer';

describe('Categories Container Tests', () => {
  it('matches the Categories Container snapshot', () => {
    const tree = renderer.create(<CategoriesContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
