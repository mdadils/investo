import React from "react";
import { StyledBody, StyledLink } from "./style";

const Body = () => {
  return (
    <StyledBody className="body">
      <div className="container">
        <div className="pitch">Reach Out to Great Investors</div>
        <div className="mb-4">Fund your dream-project</div>
        <div className="mb-4">
          <img src="/investo/investo.png" alt="Grow your money" />
        </div>
        <div className="mt-5">
          <StyledLink to="/connect-me-now">Connect me now</StyledLink>
        </div>
      </div>
    </StyledBody>
  );
};

export default Body;
