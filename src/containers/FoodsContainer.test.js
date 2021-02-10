import React from 'react';
import renderer from 'react-test-renderer';
import FoodsContainer from './FoodsContainer';

describe('Foods Container Tests', () => {
  it('matches the Foods Container snapshot', () => {
    const tree = renderer.create(<FoodsContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
