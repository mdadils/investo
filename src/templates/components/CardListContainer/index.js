import React from "react";
import { StyledLoader } from "./style";
import PropTypes from "prop-types";
import Card from "../Card";

const getLoader = () => {
  return <StyledLoader />;
};

const getCardList = (data, submitHandler) => {
  return (
    <div className="row">
      {data.map(item => {
        return (
          <div key={item.id} className="col-sm-12 col-md-6 col-lg-4">
            <Card {...item} submitHandler={submitHandler} />
          </div>
        );
      })}
    </div>
  );
};

const CardListContainer = ({ data, submitHandler }) => {
  return data.length > 0 ? getCardList(data, submitHandler) : getLoader();
};

CardListContainer.defaultProps = {
  data: []
};

CardListContainer.propTypes = {
  data: PropTypes.array
};
export default CardListContainer;
