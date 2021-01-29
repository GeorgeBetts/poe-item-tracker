import React, { Component } from "react";
import { Card } from "react-bootstrap";

export class CurrencyTracker extends Component {
  render() {
    return (
      <Card className="w-100" bg="dark" text="light">
        <Card.Header>Currency Progress</Card.Header>
        <Card.Body>
          <Card.Title>Track your progress to afford Headhunter</Card.Title>
          <Card.Text>Progress</Card.Text>
        </Card.Body>
      </Card>
    );
  }
}

export default CurrencyTracker;
