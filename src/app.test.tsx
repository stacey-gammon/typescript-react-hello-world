import React from 'react';
import renderer from 'react-test-renderer';
import { HelloWorldApp } from './app';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

it('renders correctly', () => {
  const tree = renderer.create(<HelloWorldApp />).toJSON();
  expect(tree).toMatchSnapshot();
});

it('contains words hello world', async () => {
  render(<HelloWorldApp />);

  expect((await screen.findAllByText('Hello world!')).length).toBeGreaterThan(0);
});
