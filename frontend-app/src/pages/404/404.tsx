import React from "react";
import "./404.scss";
import Navbar from "../../components/navbar/Navbar";

const _404: React.FC = () => {
  return (
    <div className="container-404">
      <Navbar />
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
    </div>
  );
};

export default _404;
