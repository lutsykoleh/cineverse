import { useDispatch, useSelector } from 'react-redux'
import {
  addToLibrary,
  removeFromLibrary,
} from '../../../redux/slices/librarySlice'
import styles from './styles.module.scss'
import { FiCheck, FiPlus } from 'react-icons/fi'

const AddToLibraryButton = ({ film, type = 'full' }) => {
  const dispatch = useDispatch()
  const library = useSelector((state) => state.library.library)

  const isInLibrary = library.some((movie) => movie.id === film.id)

  const handleClick = () => {
    if (isInLibrary) {
      dispatch(removeFromLibrary(film.id))
    } else {
      dispatch(
        addToLibrary({
          id: film.id,
          poster_path: film.poster_path,
          title: film.title,
          genre_ids: film.genre_ids,
          release_date: film.release_date,
          vote_average: film.vote_average,
        })
      )
    }
  }

  return (
    <button
      onClick={handleClick}
      className={`${styles.button} ${
        isInLibrary ? styles.added : styles.notAdded
      }`}
    >
      {type === 'full' ? (
        <>
          {isInLibrary ? (
            <span className={styles.text}>
              <FiCheck /> Already added
            </span>
          ) : (
            <span className={styles.text}>
              <FiPlus /> Add to library
            </span>
          )}
        </>
      ) : (
        <>{isInLibrary ? <FiCheck /> : <FiPlus />}</>
      )}
    </button>
  )
}

export default AddToLibraryButton
