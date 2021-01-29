import React, { Component } from "react";
import CurrencyTracker from "./CurrencyTracker";

export class Home extends Component {
  render() {
    return (
      <div>
        <CurrencyTracker></CurrencyTracker>
      </div>
    );
  }
}

export default Home;
