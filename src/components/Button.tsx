import styles from './Button.module.css';

export type props = {
  onClick: () => void;
  icon: React.ElementType;
  className?: string;
};

export const Button: React.FC<props> = ({
  onClick,
  icon: Icon,
  className = '',
}) => {
  return (
    <button
      role="button"
      className={`${styles.button} ${className}`}
      onClick={onClick}
    >
      {Icon && <Icon className={styles.icon} />}
    </button>
  );
};
