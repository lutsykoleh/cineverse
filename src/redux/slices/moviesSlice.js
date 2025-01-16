import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
  status: 'idle', // idle, loading, succeeded, failed
  error: null,

  page: 1,
  totalPages: 0,

  popular: [],
  nowPlaying: [],
  movie: {},

  sortBy: 'popularity.desc',
  genres: [],
  selectedGenres: [],
  statusGenres: 'idle', // idle, loading, succeeded, failed
  selectedYear: '',
}

export const fetchPopularMovies = createAsyncThunk(
  'movies/fetchPopularMovies',
  async ({ page = 1, sortBy = 'popularity.desc', genre = '', year = '' }) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/discover/movie?api_key=${
        import.meta.env.VITE_API_KEY
      }&page=${page}&sort_by=${sortBy}&with_genres=${genre}&primary_release_year=${year}`
    )
    return response.data
  }
)

export const fetchGenres = createAsyncThunk('movies/fetchGenres', async () => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=${
      import.meta.env.VITE_API_KEY
    }`
  )
  return response.data.genres.map((genre) => ({
    value: genre.id,
    label: genre.name,
  }))
})

export const fetchNowPlaying = createAsyncThunk(
  'movies/fetchNowPlaying',
  async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/now_playing?api_key=${
        import.meta.env.VITE_API_KEY
      }`
    )
    return response.data.results.slice(0, 3)
  }
)

export const fetchMovie = createAsyncThunk('movies/fetchMovie', async (id) => {
  const response = await axios.get(
    `https://api.themoviedb.org/3/movie/${id}?api_key=${
      import.meta.env.VITE_API_KEY
    }`
  )
  return response.data
})

const moviesSlice = createSlice({
  name: 'movies',
  initialState,
  reducers: {
    setSortBy: (state, action) => {
      state.sortBy = action.payload
    },
    setSelectedGenres: (state, action) => {
      state.selectedGenres = action.payload
    },
    setSelectedYear: (state, action) => {
      state.selectedYear = action.payload
    },
    setPage: (state, action) => {
      state.page = action.payload
    },
    resetFilters: (state) => {
      state.selectedGenres = []
      state.selectedYear = ''
      state.sortBy = 'popularity.desc'
      state.page = 1
    },
    setFilters: (state, action) => {
      state.selectedGenres = action.payload.genre
      state.selectedYear = Number(action.payload.year)
      state.sortBy = action.payload.sortBy
      state.page = action.payload.page
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchPopularMovies.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(fetchPopularMovies.fulfilled, (state, action) => {
      state.popular = action.payload.results
      state.page = action.payload.page
      state.totalPages = action.payload.total_pages
      state.status = 'succeeded'
      state.error = null
    })
    builder.addCase(fetchPopularMovies.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })

    builder.addCase(fetchGenres.pending, (state) => {
      state.statusGenres = 'loading'
    })

    builder.addCase(fetchGenres.fulfilled, (state, action) => {
      state.genres = action.payload
      state.statusGenres = 'succeeded'
    })

    builder.addCase(fetchGenres.rejected, (state) => {
      state.statusGenres = 'failed'
    })

    builder.addCase(fetchNowPlaying.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(fetchNowPlaying.fulfilled, (state, action) => {
      state.nowPlaying = action.payload
      state.status = 'succeeded'
      state.error = null
    })
    builder.addCase(fetchNowPlaying.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })

    builder.addCase(fetchMovie.pending, (state) => {
      state.status = 'loading'
      state.error = null
    })
    builder.addCase(fetchMovie.fulfilled, (state, action) => {
      state.movie = action.payload
      state.status = 'succeeded'
      state.error = null
    })
    builder.addCase(fetchMovie.rejected, (state, action) => {
      state.status = 'failed'
      state.error = action.error.message
    })
  },
})

export const {
  setSortBy,
  setSelectedGenres,
  setSelectedYear,
  setPage,
  resetFilters,
  setFilters,
} = moviesSlice.actions
export default moviesSlice.reducer
