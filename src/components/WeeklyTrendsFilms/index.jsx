import TeaserFilm from '../TeaserFilm'
import styles from './styles.module.scss'

const WeeklyTrendsFilms = () => {
  return (
    <div className={styles.weeklyTrendsFilms}>
      <div className={styles.header}>
        <h2 className={styles.title}>Weekly Trends</h2>
        <a className={styles.seeAll}>See all</a>
      </div>
      <div className={styles.films}>
        <TeaserFilm />
        <TeaserFilm />
        <TeaserFilm />
      </div>
    </div>
  )
}

export default WeeklyTrendsFilms
