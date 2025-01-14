import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from './slices/moviesSlice'
import movieDetailsSlice from './slices/movieDetailsSlice'

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    movieDetails: movieDetailsSlice,
  },
})
