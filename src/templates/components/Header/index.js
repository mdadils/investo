import React, { useState } from "react";
import { StyledNav } from "./style";
import { Link } from "react-router-dom";

const Header = () => {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <StyledNav className="navbar navbar-expand-md bg-dark navbar-dark">
      <Link to="/" className="navbar-brand btn btn-link">
        investo
      </Link>
      <button
        onClick={toggleNavbar}
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div
        className={`navbar-collapse ${isExpanded ? "" : "collapse"}`}
        id="collapsibleNavbar"
      >
        <ul className="navbar-nav">
          <li className="nav-item">
            <button className="nav-link btn btn-link" type="button">
              About US
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link" type="button">
              Payment
            </button>
          </li>
          <li className="nav-item">
            <button className="nav-link btn btn-link" type="button">
              Reports
            </button>
          </li>
        </ul>
      </div>
    </StyledNav>
  );
};

export default Header;
