import React, { Component } from "react";
import { Header } from "./Header";
import poe from "../api/path-of-exile";
import LeagueDropdown from "./LeagueDropdown";
import Home from "./Home";

class App extends Component {
  state = { league: "", leagueOptions: [] };

  componentDidMount() {
    this.getLeagues().then(() => {
      this.state.leagueOptions.forEach((option) => {
        if (
          option.description.includes(
            "This is the default Path of Exile league"
          )
        ) {
          this.setState({ league: option.id });
        }
      });
      // No default league found so set it to Standard
      if (!this.state.league === "") {
        this.setState({ league: this.state.leagueOptions[0].id });
      }
    });
  }

  getLeagues = async () => {
    const response = await poe.get("/leagues", {
      params: {
        type: "main",
      },
    });
    this.setState({ leagueOptions: response.data });
  };

  changeLeague = (league) => {
    this.setState({ league: league });
  };

  render() {
    return (
      <div className="bg-full bg-image-forest">
        <Header league={this.state.league}>
          <LeagueDropdown
            leagueOptions={this.state.leagueOptions}
            changeLeague={this.changeLeague}
            league={this.state.league}
          ></LeagueDropdown>
        </Header>
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
