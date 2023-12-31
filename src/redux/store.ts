import { Action, ThunkAction, configureStore } from "@reduxjs/toolkit";
import movieReducer from "./slices/movieSlice";
import authenticateReducer from "./slices/authenticateSlice";

export const store = configureStore({
  reducer: {
    movie: movieReducer,
    authenticate: authenticateReducer,
  },
});
// const addValue = Number(inccrementAmount) || 0; Se o incremenen ão ofi um numero, retorna zero
//dispatch(reset()); reseta tudo
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk = ThunkAction<void, RootState, null, Action<string>>;
export type AppDispatch = typeof store.dispatch;
