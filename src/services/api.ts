import environment from "../environment";

const fetch = require("node-fetch");

export const urlImage = (path: string) =>
  ` https://image.tmdb.org/t/p/w220_and_h330_face/${path}`;

// Função para fazer solicitações à API TMDb
export const tmdbRequest = async (path: string, filters: string) => {
  const url = `${environment.dbUrl}${path}${environment.requestConfig}${filters}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log("api", data); // Aqui, você pode processar a resposta recebida.
      return data.results;
    } else {
      console.error(`Erro na solicitação: Status ${response.status}`);
    }
  } catch (error) {
    console.error("Erro ao fazer a solicitação:", error);
  }
};

// Função para fazer solicitações à API ViaCEP
export const makeCepRequest = async (path: string) => {
  const url = `${environment.dbUrlCEP}${path}`;

  try {
    const response = await fetch(url);

    if (response.ok) {
      const data = await response.json();
      console.log(data); // Aqui, você pode processar a resposta recebida.
    } else {
      console.error(`Erro na solicitação: Status ${response.status}`);
    }
  } catch (error) {
    console.error("Erro ao fazer a solicitação:", error);
  }
};
