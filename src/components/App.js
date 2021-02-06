import React, { Component } from "react";
import { Header } from "./Header";
import poe from "../api/pathOfExile";
import { getHeadhunterListings, convertCurrency } from "../utils/poeHelpers";
import LeagueDropdown from "./LeagueDropdown";
import Home from "./Home";

class App extends Component {
  state = { league: "", leagueOptions: [] };

  async componentDidMount() {
    // Gets the current available leagues (sets league Options in state)
    await this.getLeagues();
    // Sets the default league e.g. currently Ritual (sets the value in state)
    this.setDefaultLeague();
    // Gets the Headhunter listings (needs league before it can do this)
    getHeadhunterListings(this.state.league);
    const convert = await convertCurrency(
      999,
      "alteration",
      "exalted",
      this.state.league
    );
    console.log(convert);
  }

  // Set the current default league
  setDefaultLeague = () => {
    this.state.leagueOptions.forEach((option) => {
      if (
        option.description.includes("This is the default Path of Exile league")
      ) {
        this.setState({ league: option.id });
      }
    });
    // No default league found so set it to Standard
    if (!this.state.league === "") {
      this.setState({ league: this.state.leagueOptions[0].id });
    }
  };

  // Get the list of current leagues from the poe api
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
