import React from "react";
import { StyledNav } from "./style";

const Header = () => {
  const navigateToHome = () => {
    window.location.href = "/";
  };

  return (
    <StyledNav className="navbar navbar-expand-md bg-dark navbar-dark">
      <button
        onClick={navigateToHome}
        className="navbar-brand btn btn-link"
        type="button"
      >
        investo
      </button>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#collapsibleNavbar"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="collapsibleNavbar">
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
