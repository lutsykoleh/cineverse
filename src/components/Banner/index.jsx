import Button from '../UI/Button';

import styles from './styles.module.scss';

const Banner = () => {
  return (
    <div className={styles.banner}>
      <img src='../images/banner.png' alt='banner img' />
      <div className={styles.info}>
        <h2 className={styles.title}>Quantumania</h2>
        <span className={styles.rating}></span>
        <p className={styles.description}>
          Super-Hero find themselves exploring the Quantum Realm, interacting with strange new
          creatures and embarking on an adventure that will push them beyond the limits of what they
          thought possible.
        </p>
        <div className={styles.buttons}>
          <Button text='Watch trailer' />
          <Button text='More details' style={'transparent'} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
