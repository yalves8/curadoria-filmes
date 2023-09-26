import environment from "../environment";

const fetch = require("node-fetch");

export const urlImage = (path: string) =>
  ` https://image.tmdb.org/t/p/w220_and_h330_face/${path}`;

const headers = {
  accept: "application/json",
  "content-type": "application/json", // Define o tipo de conteúdo do corpo
  Authorization: `Bearer ${environment.authorization}`,
};

// Função para fazer solicitações à API TMDb
export const tmdbRequestGet = async (path: string, filters: string) => {
  const url = `${environment.dbUrl}${path}?${filters}${environment.requestConfig}`;

  try {
    const response = await fetch(url, {
      method: "GET",
      headers: headers,
    });

    if (response.ok) {
      const data = await response.json();
      console.log("api", data); // Aqui, você pode processar a resposta recebida.
      return data;
    } else {
      console.error(`Erro na solicitação: Status ${response.status}`);
    }
  } catch (error) {
    console.error("Erro ao fazer a solicitação:", error);
  }
};

export const tmdbRequestPost = async (path: string, body: any) => {
  const url = `${environment.dbUrl}${path}`;

  try {
    const response = await fetch(url, {
      method: "POST", // Use POST para enviar um corpo
      body: JSON.stringify(body), // Converte o objeto em uma string JSON
      headers: headers,
    });

    if (response.ok) {
      const data = await response.json();
      console.log("api", data); // Aqui, você pode processar a resposta recebida.
      return data;
    } else {
      console.error(`Erro na solicitação: Status ${response.status}`);
    }
  } catch (error) {
    console.error("Erro ao fazer a solicitação:", error);
  }
};

export const tmdbRequestDelete = async (path: string, body: any) => {
  const url = `${environment.dbUrl}${path}`;

  try {
    const response = await fetch(url, {
      method: "DELETE", // Use POST para enviar um corpo
      body: JSON.stringify(body), // Converte o objeto em uma string JSON
      headers: headers,
    });

    if (response.ok) {
      const data = await response.json();
      console.log("api", data); // Aqui, você pode processar a resposta recebida.
      return data;
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
