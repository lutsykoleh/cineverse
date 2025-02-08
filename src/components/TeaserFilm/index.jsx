import { Link } from 'react-router-dom';

import RatingStars from '../UI/RatingStars';

import styles from './styles.module.scss';

const TeaserFilm = ({ id, img, title, genre, date, rating }) => {
  return (
    <div className={styles.film} key={id}>
      <Link to={`/films/${id}`}>
        <div className={styles.imgWrapper}>
          <img src={`https://image.tmdb.org/t/p/w500/${img}`} alt='teaser film img' />
        </div>
        <div className={styles.info}>
          <h2 className={styles.title}>{title}</h2>
          <div className={styles.details}>
            <p className={styles.genre}>
              {genre} | {date}
            </p>
            <div className={styles.rating}>
              <RatingStars initialValue={rating / 2} allowFraction={true} />
            </div>
          </div>
        </div>
      </Link>
    </div>
  );
};

export default TeaserFilm;
