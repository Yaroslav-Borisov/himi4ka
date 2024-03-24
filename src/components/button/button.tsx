import styles from './button.module.css';

interface ButtonProps {
  children: React.ReactNode;
}

const Button = ({ children }: ButtonProps): JSX.Element => {
  return (
    <button className={styles.button} type="button">
      {children}
    </button>
  );
};

export default Button;
