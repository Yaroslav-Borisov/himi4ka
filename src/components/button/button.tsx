'use client';

import cn from 'classnames';
import styles from './button.module.css';
interface ButtonProps {
  className?: string;
  children: React.ReactNode;
  clickHandler?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

const Button = ({ children, className, clickHandler }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className)}
      onClick={(e) => clickHandler && clickHandler(e)}
      type="button"
    >
      {children}
    </button>
  );
};

export default Button;
