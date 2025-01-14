import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchPopularMovies,
  resetFilters,
  setPage,
} from '../../redux/slices/moviesSlice'

import styles from './styles.module.scss'

import MoviesFilter from '../../components/MoviesFilter'
import Pagination from '../../components/Pagination'
import ListMovies from '../../components/ListMovies'
import Skeleton from '../../components/Skeleton'
import NotFound from '../../components/NotFound'

const Catalog = () => {
  const dispatch = useDispatch()
  const {
    popular,
    status,
    page,
    totalPages,
    sortBy,
    selectedGenres,
    selectedYear,
  } = useSelector((state) => state.movies)

  useEffect(() => {
    dispatch(
      fetchPopularMovies({
        page,
        sortBy,
        genre: selectedGenres,
        year: selectedYear,
      })
    )
  }, [dispatch, page, sortBy, selectedGenres, selectedYear])

  useEffect(() => {
    return () => {
      dispatch(resetFilters())
    }
  }, [dispatch])

  const handlePageChange = (newPage) => {
    dispatch(setPage(newPage))
  }

  if (status === 'failed') {
    return <NotFound />
  }

  return (
    <div className={styles.catalog}>
      <MoviesFilter />
      {status === 'loading' ? (
        <Skeleton count={9} />
      ) : popular.length === 0 ? (
        <NotFound />
      ) : (
        <ListMovies movie={popular} />
      )}
      <Pagination
        currentPage={page}
        totalPages={totalPages}
        onChange={handlePageChange}
      />
    </div>
  )
}

export default Catalog
