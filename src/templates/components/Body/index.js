import React from "react";
import { StyledBody, StyledButton } from "./style";
const Body = () => {
  const navigateToContacts = () => {
    window.location.href = "/connect-me-now";
  };

  return (
    <StyledBody className="body">
      <div className="container">
        <div className="pitch">Reach Out to Great Investors</div>
        <div className="mb-4">Fund your dream-project</div>
        <img src="/investo.png" className="my-1" alt="ima" />

        <StyledButton
          onClick={navigateToContacts}
          type="button"
          value="Connect me now"
        ></StyledButton>
      </div>
    </StyledBody>
  );
};

export default Body;
