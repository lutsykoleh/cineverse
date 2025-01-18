import { useEffect, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {
  fetchPopularMovies,
  resetFilters,
  setFilters,
  setPage,
} from '../../redux/slices/moviesSlice'
import qs from 'qs'

import styles from './styles.module.scss'

import MoviesFilter from '../../components/MoviesFilter'
import Pagination from '../../components/Pagination'
import ListMovies from '../../components/ListMovies'
import Skeleton from '../../components/Skeleton'
import NotFound from '../../components/NotFound'
import { useNavigate } from 'react-router-dom'

const Catalog = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const isSearch = useRef(false)
  const isMounted = useRef(false)

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
    if (window.location.search) {
      const params = qs.parse(window.location.search.substring(1))
      dispatch(
        setFilters({
          page: Number(params.page),
          sortBy: params.sortBy,
          genre: params.genre?.split(',').map(Number),
          year: params.selectedYear,
        })
      )
      isSearch.current = true
    }
  }, [dispatch])

  useEffect(() => {
    if (!isSearch.current) {
      dispatch(
        fetchPopularMovies({
          page,
          sortBy,
          genre: selectedGenres,
          year: selectedYear,
        })
      )
    }

    isSearch.current = false
  }, [dispatch, page, sortBy, selectedGenres, selectedYear])

  useEffect(() => {
    if (isMounted.current) {
      const queryString = qs.stringify({
        page,
        sortBy,
        genre: selectedGenres?.join(','),
        selectedYear,
      })

      navigate(`?${queryString}`)
    }
    isMounted.current = true
  }, [page, sortBy, selectedGenres, selectedYear, navigate])

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
