import React from "react";
import { Link } from "react-router-dom";
import "./index.css";

export const Header = ({}) => {
  return (
    <div className="headerContainer">
      <div className="logo">Your Movies</div>
      <div className="routeContainers">
        <Link className="link" to="/">
          Home
        </Link>
        <Link className="link" to="/categories">
          Categories
        </Link>
        <Link className="link" to="/serials">
          Serials
        </Link>
      </div>
    </div>
  );
};
