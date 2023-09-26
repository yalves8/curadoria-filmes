import { createAsyncThunk } from "@reduxjs/toolkit";
import { tmdbRequestDelete, tmdbRequestGet, tmdbRequestPost } from "./api";
import { ValidateSessionLoginModel } from "src/models/authenticate/validateSessionLoginModel";

export const requestToken = createAsyncThunk(
  "/Authenticate/RequestToken",
  async () => {
    try {
      const autenticacao = await tmdbRequestGet(`authentication/token/new`, "");
      console.log("autenticadao", autenticacao);
      return autenticacao;
    } catch (error: any) {
      throw new Error(error.response.data.Message);
    }
  }
);

export const validateWithLogin = createAsyncThunk(
  "/Authenticate/ValidateSessionLogin",
  async (login: ValidateSessionLoginModel) => {
    try {
      const autentica = await tmdbRequestGet(`authentication/token/new`, "");
      console.log("autentica", autentica);
      login.request_token = autentica.request_token;

      await tmdbRequestPost("authentication/token/validate_with_login", login);
      const sessaoId = await tmdbRequestGet(
        "authentication/session/new",
        `&request_token=${autentica.request_token}`
      );
      console.log("id", sessaoId);
      return sessaoId;
    } catch (error: any) {
      throw new Error(error.response.data.Message);
    }
  }
);

export const guestSession = createAsyncThunk(
  "/Authenticate/GuestSession",
  async () => {
    try {
      const sessaoId = await tmdbRequestGet(
        `authentication/guest_session/new`,
        ""
      );
      console.log("autentica", sessaoId);

      return sessaoId;
    } catch (error: any) {
      throw new Error(error.response.data.Message);
    }
  }
);

export const deletarSessao = createAsyncThunk(
  "/Authenticate/DeletarSessao",
  async (idSession: string) => {
    try {
      const deleteId = await tmdbRequestDelete("authentication/session", {
        session_id: idSession,
      });
      return deleteId.success;
    } catch (error: any) {
      throw new Error(error.response.data.Message);
    }
  }
);
