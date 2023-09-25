import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbRequest } from "./api";

export const listTrendingMovie = createAsyncThunk(
  "/Movie/ListarTendencias",
  async (time: string) => {
    try {
      const retorno = await tmdbRequest(`trending/movie/${time}`, "");
      console.log("retorno", retorno);
      return retorno;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const listPopularMovies = createAsyncThunk(
  "/Movie/ListarPopulares",
  async (filter: string) => {
    try {
      const retorno = await tmdbRequest("movie/popular", filter);
      console.log("retorno", retorno);
      return retorno;
    } catch (error) {
      console.log("error", error);
    }
  }
);
