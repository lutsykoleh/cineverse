import TeaserFilm from '../TeaserFilm'
import styles from './styles.module.scss'

const ListMovies = ({ movie }) => {
  return (
    <div className={styles.movies}>
      {movie?.map((movie) => (
        <TeaserFilm
          key={movie?.id}
          {...{
            id: movie?.id,
            img: movie?.poster_path,
            title: movie?.title,
            genre: movie?.genre_ids,
            date: movie?.release_date,
            rating: movie?.vote_average,
          }}
        />
      ))}
    </div>
  )
}

export default ListMovies
