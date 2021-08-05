import React, {ReactElement} from 'react';
import {shallow, render} from 'enzyme';
import renderer from 'react-test-renderer';
import Button from './index';

const setUp = <P, >(props: P): ReactElement => <Button {...props}>Click</Button>;

describe('component render enzyme', () => {
  let component: ReactElement;

  beforeEach(() => {
    component = setUp({});
  });

  it('Correctly shallow render', () => {
    expect(shallow(component).find('button')).toHaveLength(1);
    expect(shallow(component).find('button').length).toBe(1);
    expect(shallow(component).contains('Click')).toBeTruthy();
  });

  it('Correctly render component children', () => {
    expect(render(component).text()).toMatch('Click');
  });
});

describe('component render react-test', () => {
  let component: ReactElement;

  beforeEach(() => {
    component = setUp({});
  });

  it('Correctly render', () => {
    // Arrange
    const renderComponent = renderer.create(component);
    // Act
    const tree = renderComponent.toJSON();
    // Assert
    expect(tree).toMatchSnapshot();
  });
});

// it('function click', () => {
//   const mock = jest.fn(() => 12);
//   const component = <Button onClick={mock}>Hello</Button>;
//   const tree = shallow(component);
//
//   tree.find('button').simulate('click');
//
//   expect(mock).toHaveBeenCalled();
// });


