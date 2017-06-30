import React, { Component, PropTypes } from "react";
import { Screen, NavbarBack } from "components/layouts";

export default class NewsLaunch extends Component {
  static propTypes = {};

  render() {
    return (
      <Screen>
        <NavbarBack title="NewsLaunch" />
      </Screen>
    );
  }
}
