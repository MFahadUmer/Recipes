import React from 'react';
import renderer from 'react-test-renderer';
import Navbar from './Navbar';

describe('Navbar Component Tests', () => {
  it('matches the Navbar component snapshot', () => {
    const tree = renderer.create(<Navbar />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
