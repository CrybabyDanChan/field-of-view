import React, {
  ButtonHTMLAttributes,
  FC,
  ReactElement,
  ReactNode,
} from 'react';

import ButtonWrapper from './button.style';

type ButtonProps = {
    children: ReactNode;
    extends?: ButtonHTMLAttributes<HTMLButtonElement>; // HTMLAttributes
}

const Button: FC<ButtonProps> = (props: ButtonProps): ReactElement => {
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
