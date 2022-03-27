import React from 'react';
import renderer from 'react-test-renderer';
import { HelloWorldApp } from './app';

it('renders correctly', () => {
  const tree = renderer.create(<HelloWorldApp />).toJSON();
  expect(tree).toMatchSnapshot();
});
