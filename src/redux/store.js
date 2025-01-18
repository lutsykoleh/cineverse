import { configureStore } from '@reduxjs/toolkit'
import moviesSlice from './slices/moviesSlice'
import movieDetailsSlice from './slices/movieDetailsSlice'
import themeSlice from './slices/themeSlice'

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    movieDetails: movieDetailsSlice,
    theme: themeSlice,
  },
})
