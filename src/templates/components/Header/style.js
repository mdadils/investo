import styled from "styled-components";
import { variables } from "../../../styles";

const StyledNav = styled.nav`
  && {
    background-color: #334a5e !important;

    .navbar-brand {
      font-family: "Pacifico", cursive;
    }
    .button.navbar-brand.btn.btn-link:hover {
      color: #ed1a64;
    }
  }
`;

export { StyledNav };
