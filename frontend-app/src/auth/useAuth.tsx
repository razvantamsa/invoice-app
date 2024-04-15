/* eslint-disable @typescript-eslint/no-explicit-any */

import { useSelector } from "react-redux";

const useAuth = (navigate: any) => {
  const accessToken = useSelector((state: any) => state.auth.accessToken);

  if (!accessToken) {
    navigate("/login");
  }

  return accessToken;
};

export default useAuth;
