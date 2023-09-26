import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbRequestGet, tmdbRequestPost } from "./api";

export const listTrendingMovie = createAsyncThunk(
  "/Movie/ListarTendencias",
  async (time: string) => {
    try {
      const retorno = await tmdbRequestGet(`trending/movie/${time}`, "");
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
      const retorno = await tmdbRequestGet("movie/popular", filter);
      console.log("retorno", retorno);
      return retorno;
    } catch (error) {
      console.log("error", error);
    }
  }
);

export const addFavorite = createAsyncThunk(
  "/Movie/AdicionarFavorito",
  async (idMovie: number) => {
    try {
      const objetoCorpo = {
        media_type: "movie",
        media_id: idMovie,
        favorite: true,
      };
      const retorno = await tmdbRequestPost(
        "account/20465716/favorite",
        objetoCorpo
      );
      console.log("retorno", retorno);
      return retorno;
    } catch (error) {
      console.log("error", error);
    }
  }
);
