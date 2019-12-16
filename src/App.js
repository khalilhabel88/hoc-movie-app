import React from "react";
import "./App.css";
import HOC from "./HOC";
import Moviecontainer from "./Components/Moviecontainer";
const Loadin = HOC(Moviecontainer);
class App extends React.Component {
  constructor() {
    super();
    this.state = {
      isloading: true
    };
  }
  componentDidMount() {
    setTimeout(() => {
      this.setState({ isloading: false });
    }, 2000);
  }
  render() {
    return <Loadin isloading={this.state.isloading} />;
  }
}

export default App;
