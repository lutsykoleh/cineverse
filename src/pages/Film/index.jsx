import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

import MovieDetails from '../../components/MovieDetails';
import {
  fetchMovieById,
  fetchMovieVideos,
  fetchRecomedationsMovies,
} from '../../redux/slices/movieDetailsSlice';

const Film = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const { movie, videos, recomedationsMovies } = useSelector((state) => state.movieDetails);

  useEffect(() => {
    dispatch(fetchMovieById(id));
    document.title = `CineVerse | ${movie?.title}`;
    dispatch(fetchMovieVideos(id));
    dispatch(fetchRecomedationsMovies(id));
  }, [dispatch, id, movie?.title]);

  if (!movie) return <p>Loading...</p>;
  return <MovieDetails movie={movie} videos={videos} recomendationsMovies={recomedationsMovies} />;
};

export default Film;
