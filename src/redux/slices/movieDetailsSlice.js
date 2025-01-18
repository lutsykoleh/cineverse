import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const API_KEY = import.meta.env.VITE_API_KEY
const axiosInstance = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/',
})

const initialState = {
  movie: null,
  videos: [],
  recomedationsMovies: [],
  status: 'idle', // idle, loading, succeeded, failed
  error: null,
}

// Thunks
export const fetchMovieById = createAsyncThunk(
  'movies/fetchMovieById',
  async (movie_id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(`${movie_id}?api_key=${API_KEY}`)
      return response.data
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message)
    }
  }
)

export const fetchMovieVideos = createAsyncThunk(
  'movies/fetchMovieVideos',
  async (movie_id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `${movie_id}/videos?api_key=${API_KEY}`
      )
      return response.data.results
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message)
    }
  }
)

export const fetchRecomedationsMovies = createAsyncThunk(
  'movies/fetchRecomedationsMovies',
  async (movie_id, { rejectWithValue }) => {
    try {
      const response = await axiosInstance.get(
        `${movie_id}/recommendations?api_key=${API_KEY}`
      )
      return response.data.results
    } catch (error) {
      return rejectWithValue(error.response?.data || error.message)
    }
  }
)

// Slice
const movieDetailsSlice = createSlice({
  name: 'movieDetails',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      // fetchMovieById
      .addCase(fetchMovieById.pending, (state) => {
        state.status = 'loading'
        state.error = null
      })
      .addCase(fetchMovieById.fulfilled, (state, action) => {
        state.movie = action.payload
        state.status = 'succeeded'
      })
      .addCase(fetchMovieById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.payload
      })
      // fetchMovieVideos
      .addCase(fetchMovieVideos.fulfilled, (state, action) => {
        state.videos = action.payload
      })
      .addCase(fetchMovieVideos.rejected, (state, action) => {
        state.error = action.payload
      })
      // fetchRecomedationsMovies
      .addCase(fetchRecomedationsMovies.fulfilled, (state, action) => {
        state.recomedationsMovies = action.payload
      })
      .addCase(fetchRecomedationsMovies.rejected, (state, action) => {
        state.error = action.payload
      })
  },
})

export default movieDetailsSlice.reducer
