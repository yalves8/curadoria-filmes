import { createSlice } from "@reduxjs/toolkit";
import { validateWithLogin } from "src/services/loginService";

interface authenticateState {
  loading: boolean;
  sessionId: string;
}

const initialState: authenticateState = {
  loading: false,
  sessionId: "",
};

export const authenticateSlice = createSlice({
  name: "authenticate",
  initialState,
  reducers: {},
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
  },
});

export const {} = authenticateSlice.actions;
export default authenticateSlice.reducer;
