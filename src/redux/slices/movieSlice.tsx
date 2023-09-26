import { createSlice } from "@reduxjs/toolkit";
import { MovieModel } from "src/models/movie/movieModel";
import {
  addFavorite,
  listPopularMovies,
  listTrendingMovie,
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
    builder.addCase(listTrendingMovie.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(listTrendingMovie.fulfilled, (state, action) => {
      state.listMovies = action.payload.results;
      state.loading = false;
    });
    builder.addCase(listTrendingMovie.rejected, (state, action) => {
      state.loading = false;
    });

    // listar filmes populares
    builder.addCase(listPopularMovies.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(listPopularMovies.fulfilled, (state, action) => {
      state.listPopularMovies = action.payload.results;
      state.loading = false;
    });
    builder.addCase(listPopularMovies.rejected, (state, action) => {
      state.loading = false;
    });

    //adicionar Favorito
    builder.addCase(addFavorite.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(addFavorite.fulfilled, (state, action) => {
      //state.addFavorite = action.payload;
      state.loading = false;
    });
    builder.addCase(addFavorite.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { addMovie } = movieSlice.actions;
export default movieSlice.reducer;
