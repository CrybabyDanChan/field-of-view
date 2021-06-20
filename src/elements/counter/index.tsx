import React, {
  ChangeEvent,
  FC,
  InputHTMLAttributes,
} from 'react';

import CounterWrapper from './counter.style';
import Button from '@/elements/button';

type CounterProps = {
    value: number;
    step: number;
    handleCounter: (value: number) => void,
    extends: InputHTMLAttributes<HTMLInputElement>
}

const Counter: FC<CounterProps> = (props: CounterProps) => {
  const {
    step,
    handleCounter,
    value,
    ...other
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const {target: {value}} = e;

    handleCounter(+value);
  };

  const decreaseValue = () => {
    const currentValue = value - step;

    handleCounter(currentValue > 0 ? currentValue : 1);
  };

  const increaseValue = () => {
    const currentValue = value + step;

    handleCounter(currentValue > 0 ? currentValue : 1);
  };

  return <CounterWrapper>
    <div className="counter">
      <Button extends={{onClick: decreaseValue}}>+</Button>
      <input
        type="text"
        className="counter__input"
        value={String(value)}
        onChange={handleChange}
        {...other}
      />
      <Button extends={{onClick: increaseValue}}>-</Button>
    </div>
  </CounterWrapper>;
};

export default Counter;
