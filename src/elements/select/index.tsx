import React, {ReactElement} from 'react';

export type SelectProps<T> = {
    list: Array<T>,
    children: (option: T) => ReactElement
}

function Select<T>(props: SelectProps<T>): ReactElement {
  const {list, children} = props;

  return <div className="select">
    {list.map((option) => children(option))}
  </div>;
};

export default Select;
