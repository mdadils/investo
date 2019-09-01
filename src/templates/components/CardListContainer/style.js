import styled from "styled-components";
import { variables } from "../../../styles";

const StyledCardList = styled.div``;

const StyledLoader = styled.div`
  border: 16px solid ${variables.mildGrey};
  border-top: 16px solid ${variables.primaryColor};
  border-radius: 50%;
  width: 120px;
  height: 120px;
  margin: 100px auto;
  animation: spin 2s linear infinite;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;

export { StyledCardList, StyledLoader };
