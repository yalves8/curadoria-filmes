import environment from "../environment";

const fetch = require("node-fetch");

// Função para fazer solicitações à API TMDb
export const tmdbRequest = async (path: string) => {
  const url = `${environment.dbUrl}${path}${environment.requestConfig}`;

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
