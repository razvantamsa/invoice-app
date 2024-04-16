import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IAuthState } from "./state.interface";
import Cookies from "js-cookie";

const accessToken: string | null = Cookies.get("accessToken") || null;

const initialState: IAuthState = {
  accessToken,
  error: null,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    loginSuccess: (state, action: PayloadAction<string>) => {
      Cookies.set("accessToken", action.payload, {
        expires: 1,
        sameSite: "strict",
      });
      state.accessToken = action.payload;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      state.accessToken = null;
      state.error = action.payload;
    },
    logout: (state) => {
      Cookies.remove("accessToken");
      state.accessToken = null;
      state.error = null;
    },
  },
});

const authReducer = authSlice.reducer;

export const { loginSuccess, loginFailure, logout } = authSlice.actions;
export default authReducer;
