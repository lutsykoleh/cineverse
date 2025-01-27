import { createSlice } from '@reduxjs/toolkit'

const loadFromLocalStorage = () => {
  try {
    const serializedState = localStorage.getItem('library')
    return serializedState ? JSON.parse(serializedState) : []
  } catch (error) {
    console.error('Failed to load state from localStorage:', error)
    return []
  }
}

const saveToLocalStorage = (library) => {
  try {
    const serializedState = JSON.stringify(library)
    localStorage.setItem('library', serializedState)
  } catch (error) {
    console.error('Failed to save state to localStorage:', error)
  }
}

const initialState = {
  library: loadFromLocalStorage(),
}

const librarySlice = createSlice({
  name: 'library',
  initialState,
  reducers: {
    addToLibrary: (state, action) => {
      const exists = state.library.find(
        (movie) => movie.id === action.payload.id
      )
      if (!exists) {
        state.library.push(action.payload)
        saveToLocalStorage(state.library)
      }
    },
    removeFromLibrary: (state, action) => {
      state.library = state.library.filter(
        (movie) => movie.id !== action.payload
      )
      saveToLocalStorage(state.library)
    },
  },
})

export const { addToLibrary, removeFromLibrary } = librarySlice.actions
export default librarySlice.reducer
