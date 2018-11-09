import React from "react";
import PropTypes from "prop-types";

import NewContext from "../context/NewContext";

const Receives = () => {
  return (
    <NewContext.Consumer>
      {({ input }) => (
        <div>
          현재 값 : {input} {console.log("input :", input)}
        </div>
      )}
    </NewContext.Consumer>
  );
};

Receives.contextTypes = {
  input: PropTypes.object // eslint-disable-line
};

export default Receives;
