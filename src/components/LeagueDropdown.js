import React, { Component } from "react";

export class LeagueDropdown extends Component {
  handleChange = (event) => {
    this.props.changeLeague(event.target.value);
  };

  renderOptions = () => {
    return this.props.leagueOptions.map((league) => {
      return (
        <option value={league.id} key={league.id}>
          {league.id}
        </option>
      );
    });
  };

  render() {
    return (
      <select
        className="custom-select"
        value={this.props.league}
        onChange={this.handleChange}
      >
        {this.renderOptions()}
      </select>
    );
  }
}

export default LeagueDropdown;
