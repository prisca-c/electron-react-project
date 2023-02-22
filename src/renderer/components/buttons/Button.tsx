import { PropsWithChildren, ReactNode, MouseEvent } from 'react';
import Styles from './Button.module.scss';

interface ButtonProps {
  children?: ReactNode;
  icon?: ReactNode;
  onClick: (e: MouseEvent<HTMLButtonElement>) => void;
  variant: 'primary' | 'secondary';
  value?: number;
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { children, icon, onClick, variant, value } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${Styles.button} ${Styles[variant]}`}
      value={value}
    >
      <span className={Styles.icon}>{icon}</span>
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: null,
  icon: null,
  value: null,
};

export default Button;
