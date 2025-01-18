import { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import TeaserFilm from '../TeaserFilm'
import styles from './styles.module.scss'

import { fetchNowPlaying } from '../../redux/slices/moviesSlice'

const WeeklyTrendsFilms = () => {
  const { nowPlaying } = useSelector((state) => state.movies)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchNowPlaying())
  }, [dispatch])

  return (
    <div className={styles.weeklyTrendsFilms}>
      <div className={styles.header}>
        <h2 className={styles.title}>Weekly Trends</h2>
        <a className={styles.seeAll}>See all</a>
      </div>
      <div className={styles.films}>
        {nowPlaying?.map((film) => (
          <TeaserFilm
            key={film?.id}
            {...{
              id: film?.id,
              img: film?.poster_path,
              title: film?.title,
              genre: film?.genre_ids,
              date: film?.release_date,
              rating: film?.vote_average,
            }}
          />
        ))}
      </div>
    </div>
  )
}

export default WeeklyTrendsFilms
