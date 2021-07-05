import React from 'react';
import {ReactDOM} from 'react';
import renderer from 'react-test-renderer';
import Button from './index';

it('Correctly renderer', () => {
  // Arrange
  const component = renderer.create(<Button>Hello</Button>);

  // Act
  const tree = component.toJSON();

  // Assert
  expect(tree).toMatchSnapshot();
});
