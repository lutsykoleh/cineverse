import { useState } from 'react'

import styles from './styles.module.scss'

import Filters from '../../components/Filters'
import TeaserFilm from '../../components/TeaserFilm'
import Pagination from '../../components/Pagination'

const Catalog = () => {
  const [films, setFilms] = useState([])

  return (
    <div className={styles.catalog}>
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
      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onChange={(page) => console.log(page)}
      />
    </div>
  )
}

export default Catalog
