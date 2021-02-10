import React from 'react';
import renderer from 'react-test-renderer';
import Loading from './Loading';

describe('Loading Component Tests', () => {
  it('matches the Loading component snapshot', () => {
    const tree = renderer.create(<Loading />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
