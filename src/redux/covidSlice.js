import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  loading: false,
  covidStats: [],
  error: null,
};

const covidSlice = createSlice({
  name: "covid",
  initialState,
  reducers: {
    getCovidStatsFetch: (state) => {
      state.covidStats = [];
      state.loading = true;
      state.error = null;
    },
    getCovidStatsSuccess: (state, action) => {
      state.covidStats = action.payload.data;
      state.loading = false;
      state.error = null;
    },
    getCovidStatsError: (state, action) => {
      state.covidStats = [];
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { getCovidStatsFetch, getCovidStatsSuccess, getCovidStatsError } =
  covidSlice.actions;

export default covidSlice.reducer;
