import React from "react";
import Pane from "./component/Pane";
import NewContext from "./context/NewContext";

class App extends React.Component {
  state = {
    text: "hi, there?"
  };

  render() {
    return (
      <NewContext.Provider value={this.state.text}>
        <div className="panes">
          <Pane />
        </div>
      </NewContext.Provider>
    );
  }
}

export default App;
