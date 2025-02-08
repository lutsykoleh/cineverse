import styles from './styles.module.scss';

const NotFound = ({ title, message }) => {
  return (
    <div className={styles.notFoundBlock}>
      <h2 className={styles.title}>{title || 'OOPS...'}</h2>
      <p className={styles.text}>We are very sorry!</p>
      <p className={styles.text}>{message}</p>
    </div>
  );
};

export default NotFound;
