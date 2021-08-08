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
    color: 'red',
  },
};

export type Styles = typeof styles;

export type ButtonType = keyof Styles;

export type ButtonProps = {
    children: ReactNode;
    styleType: ButtonType;
    extends?: ButtonHTMLAttributes<HTMLButtonElement>; // HTMLAttributes
    onClick: () => void
}

const Button: FC<ButtonProps> = (props: ButtonProps): ReactElement => {
  const {
    children,
    onClick,
    styleType,
    ...other
  } = props;

  const className = `button ${styleType}`;

  return <ButtonWrapper>
    <button
      className={className}
      type="button"
      onClick={onClick}
      {...other}
    >
      {children}
    </button>
  </ButtonWrapper>;
};

Button.defaultProps = {
  onClick: () => null,
};

export default Button;
