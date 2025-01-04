import { useState } from 'react'
import Filters from '../../components/Filters'
import TeaserFilm from '../../components/TeaserFilm'
import styles from './styles.module.scss'

const Library = () => {
  const [films, setFilms] = useState([])

  return (
    <div className={styles.library}>
      <Filters />
      <div className={styles.films}>
        {films?.results?.map((film) => (
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

export default Library
