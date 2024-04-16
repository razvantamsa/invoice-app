/* eslint-disable @typescript-eslint/no-explicit-any */
import { Middleware } from "redux";
import Cookies from "js-cookie";

const cookie: Middleware =
  (store) => (next: (action: any) => any) => (action: any) => {
    const state = store.getState();

    if (action.type === "auth/loginSuccess" && state.auth.accessToken) {
      Cookies.set("accessToken", state.auth.accessToken);
    }

    return next(action);
  };

export default cookie;
