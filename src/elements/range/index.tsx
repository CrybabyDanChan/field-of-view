import React, {ChangeEvent, FC, InputHTMLAttributes} from 'react';

import RangeWrapper from './range.style';

interface RangeProps extends InputHTMLAttributes<HTMLInputElement> {
    title: string;
    options: number[];
    handleRange: (value: number) => void
}

const Range: FC<RangeProps> = (props: RangeProps) => {
  const {
    title,
    options,
    handleRange,
    name,
    ...other
  } = props;

  const handleChange = (e: ChangeEvent<HTMLInputElement>): void => {
    const {target: {value}} = e;

    handleRange(+value);
  };

  return <RangeWrapper>
    <label htmlFor={name} className="range">
      <div className="range__title">
        {title}
      </div>
      <div className="range__option-container">
        {options.map((option, index) =>
          <span
            className="range__option-item"
            key={index * option}
            onClick={() => handleRange(option)}
          >
            {option}
          </span>)}
      </div>
      <input
        type="range"
        className="range__input"
        name={name}
        onChange={handleChange}
        {...other}
      />
    </label>
  </RangeWrapper>;
};

export default Range;
