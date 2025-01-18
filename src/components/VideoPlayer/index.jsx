import { useState } from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import styles from './styles.module.scss'
import TeaserFilm from '../TeaserFilm'

const VideoPlayer = ({ videos }) => {
  const [selectedVideo, setSelectedVideo] = useState(videos[0])
  const officialTrailers = videos
    .filter(
      (video) =>
        video.site === 'YouTube' &&
        (video.type === 'Trailer' || video.type === 'Teaser') &&
        video.official
    )
    .slice(0, 5)

  return (
    <div className={styles.videoSection}>
      <h2>Videos & Trailers</h2>
      <div className={styles.videoPlayer}>
        <iframe
          src={`https://www.youtube.com/embed/${selectedVideo?.key}`}
          title={selectedVideo?.name}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className={styles.videoGrid}>
        {officialTrailers.map((video) => (
          <button
            key={video.key}
            onClick={() => setSelectedVideo(video)}
            className={`${styles.videoButton} ${
              selectedVideo?.key === video.key ? styles.active : ''
            }`}
          >
            <div className={styles.videoTitle}>{video.name}</div>
            <div className={styles.videoType}>{video.type}</div>
          </button>
        ))}
      </div>
    </div>
  )
}

const MovieDetails = ({ movie, videos, recomedationsMovies }) => {
  const settings = {
    dots: false,
    arrows: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
  }

  return (
    <div className={styles.container}>
      <div
        className={styles.backdrop}
        style={{
          backgroundImage: `url(${
            import.meta.env.VITE_TMDB_IMAGE_URL
          }/original${movie.backdrop_path})`,
        }}
      >
        <div className={styles.overlay} />
      </div>

      <div className={styles.content}>
        <div className={styles.posterSection}>
          <img
            src={`${import.meta.env.VITE_TMDB_IMAGE_URL}/w500${
              movie.poster_path
            }`}
            alt={movie.title}
            className={styles.poster}
          />

          <div className={styles.stats}>
            <div className={styles.rating}>
              <span className={styles.score}>
                {movie.vote_average.toFixed(1)}
              </span>
              <span className={styles.votes}>/ 10</span>
            </div>
            <div className={styles.runtime}>
              {Math.floor(movie.runtime / 60)}h {movie.runtime % 60}m
            </div>
          </div>
        </div>

        <div className={styles.infoSection}>
          <h1 className={styles.title}>{movie.title}</h1>

          <div className={styles.metadata}>
            <span>{formatDate(movie.release_date)}</span>
            <span className={styles.dot}>•</span>
            <span>{movie.genres.map((genre) => genre.name).join(', ')}</span>
          </div>

          <p className={styles.tagline}>{movie.tagline}</p>
          <p className={styles.overview}>{movie.overview}</p>

          <div className={styles.details}>
            <div className={styles.detailItem}>
              <h3>Status</h3>
              <p>{movie.status}</p>
            </div>
            <div className={styles.detailItem}>
              <h3>Budget</h3>
              <p>${(movie.budget / 1000000).toFixed(1)}M</p>
            </div>
            <div className={styles.detailItem}>
              <h3>Revenue</h3>
              <p>${(movie.revenue / 1000000).toFixed(1)}M</p>
            </div>
            <div className={styles.detailItem}>
              <h3>Production</h3>
              <p>
                {movie.production_companies
                  .map((company) => company.name)
                  .join(', ')}
              </p>
            </div>
          </div>

          {videos?.length > 0 && <VideoPlayer videos={videos} />}
        </div>
      </div>
      <div className={styles.recomedationsMovie}>
        <h2>Recomedations</h2>
        <div className={styles.recomedations}>
          <Slider {...settings}>
            {recomedationsMovies.map((movie) => (
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
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default MovieDetails
