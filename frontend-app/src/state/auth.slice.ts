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
      console.log(state, action);
      state.accessToken = action.payload;
      state.error = null;
    },
    loginFailure: (state, action: PayloadAction<string>) => {
      console.log(state, action);
      state.accessToken = null;
      state.error = action.payload;
    },
  },
});

const authReducer = authSlice.reducer;

export const { loginSuccess, loginFailure } = authSlice.actions;
export default authReducer;
