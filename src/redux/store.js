import { configureStore } from '@reduxjs/toolkit';

import libraryReducer from './slices/librarySlice';
import movieDetailsSlice from './slices/movieDetailsSlice';
import moviesSlice from './slices/moviesSlice';
import themeSlice from './slices/themeSlice';

export const store = configureStore({
  reducer: {
    movies: moviesSlice,
    movieDetails: movieDetailsSlice,
    theme: themeSlice,
    library: libraryReducer,
  },
});
