import styled from "styled-components";
import { variables } from "../../../styles";

const StyledCard = styled.div`
  max-width: 400px;
  font-family: "Montserrat", sans-serif;
  &:hover {
    box-shadow: 0 1rem 3rem rgba(0, 0, 0, 0.175) !important;
  }
  .edit-icon {
    width: 24px;
    height: auto;
    position: absolute;
    top: 20px;
    right: 20px;
    cursor: pointer;
  }
  .name {
    font-family: "montserrat-semibold";
    font-size: 1.5rem;
    line-height: 1.5rem;
    color: ${variables.primaryColor};
    display: inline-block;
    width: 100%;
    overflow: hidden;
  }

  .contact {
    font-size: 1rem;
    line-height: 1.1rem;
    height: 3rem;
    overflow: hidden;
    letter-spacing: -0.5px;
    .email,
    .phone {
      color: ${variables.shark};
      display: block;
    }
  }

  .city-container {
    font-size: 1.1rem;
    color: ${variables.lightShark};
  }

  .website-container {
    transition: all 0.3s;
    border: 1px dashed ${variables.shark};
    border-radius: 8px;
    cursor: pointer;
    display: inline-block;

    padding: 0px 12px;
  }
  .website {
    font-size: 0.8rem;
    color: ${variables.lightShark};
  }
  .website-container:hover {
    background: ${variables.customGreen};
  }
  .website:hover {
    text-decoration: none;
  }
`;

export { StyledCard };
