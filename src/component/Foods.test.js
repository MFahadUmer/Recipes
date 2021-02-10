import React from 'react';
import renderer from 'react-test-renderer';
import Foods from './Foods';

describe('Foods Component Tests', () => {
  it('matches the Foods component snapshot', () => {
    const tree = renderer.create(<Foods />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
