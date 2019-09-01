import React, { useState } from "react";
import PropTypes from "prop-types";
import { StyledCard } from "./style";
import message from "./messages";
import EditDetails from "../EditDetails";

const Card = ({ name, email, phone, address, website, company }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };
  return (
    <StyledCard className={`card shadow m-3`}>
      <div className="card-body">
        <div className="card-title">
          <span className="name">{name}</span>
        </div>

        <div className="contact">
          <a
            href={`mailto:${email}?subject=Mail from Our Site`}
            className="email"
            rel="noreferrer noopener"
            target="_blank"
          >
            {email}
          </a>
          <span className="phone mt-1">{phone}</span>
        </div>
        {address && address.city && (
          <div className="city-container">
            <span className="city label">{message.CITY_LABEL}</span>
            <span className="city">{address.city}</span>
          </div>
        )}
        {website && (
          <div className="website-container">
            <a
              className="website"
              href={website}
              rel="noreferrer noopener"
              target="_blank"
            >
              {website}
            </a>
          </div>
        )}
        {company && company.name && (
          <div className="org-container my-3">
            <span className="org-label">{message.ORG_LABEL} </span>
            <span className="org">{company.name}</span>
          </div>
        )}
        <div className="edit">
          <input
            onClick={toggleIsOpen}
            type="button"
            className="btn btn-primary rounded-pill"
            value="Edit"
            data-toggle="modal"
            data-target="#exampleModalLong"
          />
        </div>
      </div>
      {isOpen ? <h1>Hello</h1> : null}
    </StyledCard>
  );
};

Card.propTypes = {
  name: PropTypes.string.isRequired,
  email: PropTypes.string,
  phone: PropTypes.string,
  address: PropTypes.object,
  website: PropTypes.string,
  company: PropTypes.object
};

export default Card;
