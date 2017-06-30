import React, { Component, PropTypes } from "react";
import { Screen, Navbar } from "components/layouts";

export default class HomeScreen extends Component {
  static propTypes = {};

  render() {
    return (
      <Screen>
        <Navbar title="Home" />
      </Screen>
    );
  }
}
