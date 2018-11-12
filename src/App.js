import React from "react";
import Pane from "./component/Pane";
import NewContext from "./context/NewContext";

class App extends React.Component {
  state = {
    text: "hi, there?"
  };

  handleChange = event => {
    this.setState({ text: event.target.value });
  };

  render() {
    const { text } = this.state;

    return (
      <NewContext.Provider value={{ text }}>
        <div className="panes">
          <input value={text} onChange={() => this.handleChange()} />
          <Pane />
        </div>
      </NewContext.Provider>
    );
  }
}

export default App;
