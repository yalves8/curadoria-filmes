import { createSlice } from "@reduxjs/toolkit";
import { MovieModel } from "src/models/movie/movieModel";
import {
  listNowPlayingMovie,
  listPopularMovies,
} from "src/services/movieService";

interface movieState {
  loading: boolean;
  listMovies: MovieModel[];
  listPopularMovies: MovieModel[];
}

const initialState: movieState = {
  loading: false,
  listMovies: [] as MovieModel[],
  listPopularMovies: [] as MovieModel[],
};

export const movieSlice = createSlice({
  name: "movie",
  initialState,
  reducers: {
    addMovie: (state, action) => {
      state.listMovies = action.payload;
    },
  },
  extraReducers: (builder) => {
    //listar filmes lançamentos
    builder.addCase(listNowPlayingMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(listNowPlayingMovie.fulfilled, (state, action) => {
      state.listMovies = action.payload;
      state.loading = false;
    });
    builder.addCase(listNowPlayingMovie.rejected, (state, action) => {
      state.loading = false;
    });

    // listar filmes populares
    builder.addCase(listPopularMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(listPopularMovies.fulfilled, (state, action) => {
      state.listPopularMovies = action.payload;
      state.loading = false;
    });
    builder.addCase(listPopularMovies.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;
