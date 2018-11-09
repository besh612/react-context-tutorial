import React from "react";
import RightPane from "./component/RightPane";
import LeftPane from "./component/LeftPane";

import "./App.css";

const App = () => {
  return (
    <div className="panes">
      <LeftPane />
      <RightPane />
    </div>
  );
};

export default App;
