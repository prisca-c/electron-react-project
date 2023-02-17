import { PropsWithChildren, ReactNode } from 'react';
import Styles from './Button.module.scss';

interface ButtonProps {
  children?: ReactNode;
  icon?: ReactNode;
  onClick: () => void;
  variant: 'primary' | 'secondary';
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { children, icon, onClick, variant } = props;
  return (
    <button
      type="button"
      onClick={onClick}
      className={`${Styles.button} ${Styles[variant]}`}
    >
      <span className={Styles.icon}>{icon}</span>
      {children}
    </button>
  );
};

Button.defaultProps = {
  children: null,
  icon: null,
};

export default Button;
