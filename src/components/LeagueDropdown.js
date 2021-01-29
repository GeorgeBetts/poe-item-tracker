import React, { Component } from "react";

export class LeagueDropdown extends Component {
  state = {
    value: this.props.league,
  };

  handleChange = (event) => {
    this.setState({ value: event.target.value });
    this.props.changeLeague(event.target.value);
  };

  render() {
    return (
      <select
        className="custom-select"
        value={this.state.value}
        onChange={this.handleChange}
      >
        <option value="Ritual">Ritual</option>
        <option value="Heist">Heist</option>
        <option value="Harvest">Harvest</option>
      </select>
    );
  }
}

export default LeagueDropdown;
