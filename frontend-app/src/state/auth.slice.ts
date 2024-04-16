import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "./state.interface";

const initialState: IAuthState = {
  accessToken: null,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      state.accessToken = action.payload;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.accessToken = null;
      state.error = action.payload;
    },
  },
});

const authReducer = authSlice.reducer;

export const { loginSuccess, loginFailure } = authSlice.actions;
export default authReducer;
