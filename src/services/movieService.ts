import { tmdbRequest } from "./api";

export const nowPlayingMovie = async () => {
  try {
    const retorno = await tmdbRequest("movie/now_playing");
    console.log("retorno", retorno);
    return retorno;
  } catch (error) {
    console.log("error", error);
  }
};
