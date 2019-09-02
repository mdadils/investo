import styled from "styled-components";
import { variables } from "../../../styles";

const StyledForm = styled.form``;

const StyledModal = styled.div`
  &.modal {
    display: block;
    position: fixed;
    z-index: 1;
    padding-top: 5rem;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: ${variables.pitchBlack}; /** Fallback for old browsers**/
    background-color: ${variables.pitchBlackTrans};
  }
  .modal-content {
    background-color: #fefefe;
    margin: auto;
    padding: 1.8rem;
    border: 1px solid ${variables.darkGrey};
    width: 70%;
    border-radius: 0.6rem;
  }
`;

export { StyledForm, StyledModal };
