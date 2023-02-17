import { PropsWithChildren, ReactNode } from 'react';
import Styles from './Button.module.scss';

type Children = {
  text: string;
  icon?: ReactNode;
};

interface ButtonProps {
  children?: Children;
  onClick: () => void;
  variant: 'primary' | 'secondary';
}

const Button = (props: PropsWithChildren<ButtonProps>) => {
  const { children, onClick, variant } = props;
  return (
    <button
      type="button"
      className={`${Styles.button} ${Styles[variant]}`}
      onClick={onClick}
    >
      {children?.icon}
      {children?.text}
    </button>
  );
};

Button.defaultProps = {
  children: null,
};

export default Button;
