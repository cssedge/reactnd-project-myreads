import React from "react";
import background from "./images/illustrations.png";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div
      className="list-books-title"
      style={{
        background: `url(${background}) repeat-x`,
        backgroundSize: "contain",
        minHeight: "80px",
        lineHeight: "80px",
        marginBottom: "2rem",
      }}
    >
      <h1>
        <Link to="/"> MyReads </Link>
      </h1>
    </div>
  );
}

export default Header;
