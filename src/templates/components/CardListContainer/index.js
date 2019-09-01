import React from "react";
import { StyledLoader } from "./style";
import PropTypes from "prop-types";
import Card from "../Card";

const getLoader = () => {
  return <StyledLoader />;
};

const getCardList = data => {
  return (
    <div className="row">
      {data.map(item => {
        return (
          <div key={item.id} className="col-sm-12 col-md-6 col-lg-4">
            <Card {...item} />
          </div>
        );
      })}
    </div>
  );
};

const CardListContainer = ({ data }) => {
  return data.length > 0 ? getCardList(data) : getLoader();
};

CardListContainer.defaultProps = {
  data: []
};

CardListContainer.propTypes = {
  data: PropTypes.array
};
export default CardListContainer;
