import { configureStore } from '@reduxjs/toolkit'
import genreSlice from './slices/genreSlice'
import movieListSlice from './slices/movieListSlice'
import movieDetailSlice from './slices/movieDetailSlice'

export const store = configureStore({
  reducer: {
    genres: genreSlice,
    movieList: movieListSlice,
    movieDetail: movieDetailSlice
  },
})