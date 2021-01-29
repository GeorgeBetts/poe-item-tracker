import React, { Component } from "react";
import { Header } from "./Header";
import Home from "./Home";

class App extends Component {
  state = { league: "Harvest" };

  changeLeague = (league) => {
    this.setState({ league: league });
  };

  render() {
    return (
      <div className="bg-full bg-image-forest">
        <Header
          league={this.state.league}
          changeLeague={this.changeLeague}
        ></Header>
        <div>
          <div className="container mt-4">
            <Home></Home>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
