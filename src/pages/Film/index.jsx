import MovieDetails from '../../components/VideoPlayer'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import {
  fetchMovieById,
  fetchMovieVideos,
  fetchRecomedationsMovies,
} from '../../redux/slices/movieDetailsSlice'

const Film = () => {
  const dispatch = useDispatch()
  const { id } = useParams()

  const { movie, videos, recomedationsMovies } = useSelector(
    (state) => state.movieDetails
  )

  useEffect(() => {
    dispatch(fetchMovieById(id))
    dispatch(fetchMovieVideos(id))
    dispatch(fetchRecomedationsMovies(id))
  }, [dispatch, id])

  if (!movie) return <p>Loading...</p>

  console.log()

  return (
    <MovieDetails
      movie={movie}
      videos={videos}
      recomedationsMovies={recomedationsMovies}
    />
  )
}

export default Film
