import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  count: 0,
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {},
});

export const {} = movieSlice.actions;
export default movieSlice.reducer;
