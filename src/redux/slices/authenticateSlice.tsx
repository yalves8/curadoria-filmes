import { createSlice } from "@reduxjs/toolkit";
import { guestSession, validateWithLogin } from "src/services/loginService";

interface authenticateState {
  loading: boolean;
  sessionId: string;
  guestSessionId: string;
  nameGuest: string;
  modalGuest: boolean;
}

const initialState: authenticateState = {
  loading: false,
  sessionId: "",
  guestSessionId: "",
  nameGuest: "",
  modalGuest: false,
};

export const authenticateSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {
    setNameGuest: (state, action) => {
      state.nameGuest = action.payload;
    },
    setModalGuest: (state, action) => {
      state.modalGuest = action.payload;
    },
    resetGuest: () => {
      return initialState;
    },
  },
  extraReducers: (builder) => {
    // criar sessao
    builder.addCase(validateWithLogin.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(validateWithLogin.fulfilled, (state, action) => {
      state.sessionId = action.payload.session_id;
      state.loading = false;
    });
    builder.addCase(validateWithLogin.rejected, (state, action) => {
      state.loading = false;
    });

    // criar sessao convidado
    builder.addCase(guestSession.pending, (state) => {
      state.loading = true;
    });
    builder.addCase(guestSession.fulfilled, (state, action) => {
      state.guestSessionId = action.payload.guest_session_id;
      state.loading = false;
    });
    builder.addCase(guestSession.rejected, (state, action) => {
      state.loading = false;
    });
  },
});

export const { setNameGuest, setModalGuest, resetGuest } =
  authenticateSlice.actions;
export default authenticateSlice.reducer;
