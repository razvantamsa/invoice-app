import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { logout } from "../../state/auth.slice";
import "./Navbar.scss";
import IState from "../../state/state.interface";

const Navbar: React.FC = () => {
  const { accessToken } = useSelector((state: IState) => state.auth);
  const dispatch = useDispatch();

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className="navbar">
      Invoice App
      {accessToken && (
        <button className="logout-button" onClick={handleLogout}>
          Logout
        </button>
      )}
    </div>
  );
};
export default Navbar;
