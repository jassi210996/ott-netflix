import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlaying: null,
    popular: null,
    trending: null,
    upcoming: null,
    trailer: null,
  },
  reducers: {
    addNowPlayingMovies(state, action) {
      state.nowPlaying = action.payload;
    },
    addPopularMovies(state, action) {
      state.popular = action.payload;
    },
    addTrendingMovies(state, action) {
      state.trending = action.payload;
    },
    addUpcomingMovies(state, action) {
      state.upcoming = action.payload;
    },
    addTrailer(state, action) {
      state.trailer = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailer,
  addPopularMovies,
  addTrendingMovies,
  addUpcomingMovies,
} = moviesSlice.actions;

export default moviesSlice.reducer;
