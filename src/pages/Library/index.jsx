import { useState } from 'react'
import { useSelector } from 'react-redux'
import ListMovies from '../../components/ListMovies'
import Pagination from '../../components/Pagination'
import styles from './styles.module.scss'

const Library = () => {
  const films = useSelector((state) => state.library.library)
  const [currentPage, setCurrentPage] = useState(1)
  const itemsPerPage = 20

  const startIndex = (currentPage - 1) * itemsPerPage
  const currentFilms = films.slice(startIndex, startIndex + itemsPerPage)

  const handlePageChange = (page) => {
    setCurrentPage(page)
  }

  return (
    <div className={styles.library}>
      <div className={styles.films}>
        <ListMovies movies={currentFilms} />
      </div>
      <Pagination
        currentPage={currentPage}
        totalPages={Math.ceil(films.length / itemsPerPage)}
        onChange={handlePageChange}
      />
    </div>
  )
}

export default Library
