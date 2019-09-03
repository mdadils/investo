import styled from "styled-components";
import { Link } from "react-router-dom";

const StyledBody = styled.div`
  min-height: 30rem;
  .container {
    margin: 8rem auto;
    text-align: center !important;
  }
  .pitch {
    font-size: 2rem;
    font-family: "montserrat-semibold";
  }
  img {
    display: block;
    margin: 0rem auto;
  }
`;

const StyledLink = styled(Link)`
  font-family: montserrat-semibold;
  background-color: #ed1965;
  margin-top: 2.5rem;
  outline: none;
  color: #fff;
  text-align: center;
  border-radius: 2.5rem;
  min-width: 16rem;
  transition: all 0.3s;
  font-size: 1.3rem;
  line-height: 1.3rem;
  padding: 1.1rem 3rem;
  &:hover {
    box-shadow: 0px 5px 19px 1px rgba(237, 25, 101, 0.5);
    color: #fff;
    text-decoration: none;
  }
`;

export { StyledBody, StyledLink };
