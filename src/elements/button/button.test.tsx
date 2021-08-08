import React, {ReactElement} from 'react';
import {shallow, render} from 'enzyme';
import renderer from 'react-test-renderer';
import Button, {ButtonProps} from './index';
import {expect} from '@jest/globals';

const buttonProps: ButtonProps = {
  children: 'hello',
  styleType: 'dangerous',
  onClick: () => {},
};

const setUp = <P extends ButtonProps, >(props: P): ReactElement => <Button {...props}>Click</Button>;

describe('component render enzyme', () => {
  let component: ReactElement;

  beforeEach(() => {
    component = setUp(buttonProps);
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

// describe('component render react-test', () => {
//   let component: ReactElement;
//
//   beforeEach(() => {
//     component = setUp(buttonProps);
//   });
//
//   it('Correctly render', () => {
//     // Arrange
//     const renderComponent = renderer.create(component);
//     // Act
//     const tree = renderComponent.toJSON();
//     // Assert
//     expect(tree).toMatchSnapshot();
//   });
// });

describe('button props test', () => {
  it('has props', () => {
    const component = shallow(setUp(buttonProps));

    expect(component.find('button').contains('hello'));
  });

  it('default props', () => {
    // @ts-ignore
    const result = Button.defaultProps.onClick();

    expect(result).toBe(null);
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


