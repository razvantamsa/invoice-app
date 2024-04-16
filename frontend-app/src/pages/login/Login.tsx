import React, { useState } from "react";
import { useMutation } from "react-query";
import { useDispatch } from "react-redux";

import "./Login.scss";
import { loginUser } from "../../utils/requests";
import { loginFailure, loginSuccess } from "../../state/auth.slice";
import Navbar from "../../components/navbar/Navbar";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const dispatch = useDispatch();

  const mutation = useMutation(loginUser, {
    onSuccess: (data) => {
      dispatch(loginSuccess(data.access_token));
    },
    onError: (error: { message: string }) => {
      dispatch(loginFailure(error.message));
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate({ email, password });
  };

  return (
    <div className="login-container">
      <Navbar />

      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            autoComplete="off"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button" onClick={handleSubmit}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
