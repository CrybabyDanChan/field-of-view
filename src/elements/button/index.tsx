import React, {ButtonHTMLAttributes, FC, ReactNode} from 'react';

import ButtonWrapper from './button.style';

type ButtonProps = {
    children: ReactNode;
    extends?: ButtonHTMLAttributes<HTMLButtonElement>;
}

const Button: FC<ButtonProps> = (props: ButtonProps) => {
  const {
    children,
    ...other
  } = props;

  return <ButtonWrapper>
    <button
      className="button"
      type="button"
      {...other}
    >
      {children}
    </button>
  </ButtonWrapper>;
};

export default Button;
