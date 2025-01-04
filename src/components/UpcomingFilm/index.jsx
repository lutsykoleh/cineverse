import Button from '../UI/Button'
import styles from './styles.module.scss'

const UpcomingFilm = () => {
  return (
    <>
      <h2 className={styles.title}>Upcoming this month</h2>
      <div className={styles.film}>
        <div className={styles.imgWrapper}>
          <img src="../images/upcoming-film.png" alt="upcoming film img" />
        </div>
        <div className={styles.info}>
          <h3 className={styles.title}>The Lost City</h3>
          <div className={styles.details}>
            <p>
              <strong>Release date:</strong>
              <span className={styles.releaseDate}>03.03.2023</span>
            </p>
            <p>
              <strong>Vote / Votes:</strong>
              <div className={styles.vote}>
                <span className={styles.voteScore}>7.3</span>
                <div>/</div>
                <span className={styles.voteCount}>1260</span>
              </div>
            </p>
            <p>
              <strong>Popularity:</strong>
              <span className={styles.popularity}>99.9</span>
            </p>
            <p>
              <strong>Genre:</strong>
              <span className={styles.genre}>Comedy, action</span>
            </p>
          </div>
          <div className={styles.about}>
            <h2>About</h2>
            <p>
              Reclusive author Loretta Sage writes about exotic places in her
              popular adventure novels that feature a handsome cover model named
              Alan. While on tour promoting her new book with Alan, Loretta gets
              kidnapped by an eccentric billionaire who hopes she can lead him
              to an ancient citys lost treasure from her latest story.
              Determined to prove he can be a hero in real life and not just on
              the pages of her books, Alan sets off to rescue her.
            </p>
          </div>
          <Button text="Add to my library" link="#" />
        </div>
      </div>
    </>
  )
}

export default UpcomingFilm
