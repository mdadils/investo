import styled from "styled-components";

const StyledNav = styled.nav`
  &&&.bg-dark {
    background-color: #334a5e !important;
  }

  .navbar-brand {
    font-family: "Pacifico", cursive;
  }

  &&.navbar-dark .navbar-brand:hover,
  .navbar-dark .navbar-brand:focus {
    color: #ed1a64;
  }
`;

export { StyledNav };
