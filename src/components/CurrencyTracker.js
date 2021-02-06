import React, { Component } from "react";

export class CurrencyTracker extends Component {
  render() {
    return (
      <div className="card bg-dark text-light">
        <div className="card-header py-1">
          <div className="d-flex align-items-center">
            <img
              src="https://web.poecdn.com/image/Art/2DItems/Currency/CurrencyRerollRare.png?scale=1&w=1&h=1"
              alt="Chaos Orb"
            ></img>
            <h5 className="ml-2">Currency Progress</h5>
          </div>
        </div>
        <div className="card-body">
          <div className="card-title">
            Track your progress to afford Headhunter
          </div>
          <div className="card-text">Progress</div>
        </div>
      </div>
    );
  }
}

export default CurrencyTracker;
