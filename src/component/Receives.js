import React from "react";
import NewContext from "../context/NewContext";

const Receives = () => {
  return (
    <NewContext.Consumer>
      {context => <div>현재 설정된 값: {context}</div>}
    </NewContext.Consumer>
  );
};

export default Receives;
