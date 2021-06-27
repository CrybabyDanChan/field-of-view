import React, {
  ButtonHTMLAttributes,
  FC,
  ReactElement,
  ReactNode,
} from 'react';

import ButtonWrapper from './button.style';

const styles = {
  primary: {
    color: 'white',
  },

  dangerous: {
    colore: 'red',
  },
};

type Styles = typeof styles;

type ButtonType = keyof Styles;

type ButtonProps = {
    children: ReactNode;
    styleType?: ButtonType;
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
