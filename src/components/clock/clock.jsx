import React, { Component } from "react";
import Nav from 'react-bootstrap/Nav';

class LiveClockUpdate extends Component {
  constructor(props) {
    super(props);

    this.state = { date: new Date() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date()
    });
  }

  render() {
    return (
      <Nav.Link eventKey={2}>
        {this.state.date.toLocaleTimeString()}
      </Nav.Link>
    );
  }
}

export default LiveClockUpdate;
