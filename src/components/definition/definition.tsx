import styles from './definition.module.css';

interface DefinitionProps {
  children: React.ReactNode;
}

const Definition = ({ children }: DefinitionProps): JSX.Element => {
  return (
    <div className={styles.definition}>
      <span>{children}</span>
    </div>
  );
};

export default Definition;
