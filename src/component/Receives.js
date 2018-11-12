import React from "react";
import PropTypes from "prop-types";
import NewContext from "../context/NewContext";

const Receives = () => {
  return (
    <NewContext.Consumer>
      {({ text }) => <div>현재 설정된 값: {text}</div>}
    </NewContext.Consumer>
  );
};

Receives.contextTypes = {
  text: PropTypes.object
};

export default Receives;
