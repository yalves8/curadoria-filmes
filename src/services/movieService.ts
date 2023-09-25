import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbRequest } from "./api";

export const listNowPlayingMovie = createAsyncThunk(
  "/Movie/ListarLancamentos",
  async () => {
    try {
      const retorno = await tmdbRequest("movie/now_playing");
      console.log("retorno", retorno);
      return retorno;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const listPopularMovies = createAsyncThunk(
  "/Movie/ListarPopulares",
  async () => {
    try {
      const retorno = await tmdbRequest("movie/popular");
      console.log("retorno", retorno);
      return retorno;
    } catch (error) {
      console.log("error", error);
    }
  }
);
