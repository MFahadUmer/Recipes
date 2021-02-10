import React from 'react';
import renderer from 'react-test-renderer';
import AppContainer from './AppContainer';

describe('App Container Tests', () => {
  it('matches the App Container snapshot', () => {
    const tree = renderer.create(<AppContainer />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
