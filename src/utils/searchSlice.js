import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searchView: false,
    result: null,
    recommendation: null,
  },
  reducers: {
    toggleSearchView: (state) => {
      state.searchView = !state.searchView;
    },
    addResult: (state, action) => {
      const { results, recommendation } = action.payload;
      state.result = results;
      state.recommendation = recommendation;
    },
  },
});

export const { toggleSearchView, addResult } = searchSlice.actions;

export default searchSlice.reducer;
