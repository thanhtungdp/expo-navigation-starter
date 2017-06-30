import React from "react";
import { StackNavigator } from "react-navigation";
import tabNavigator from "config/tabNavigator";
import SettingLaunch from "./SettingLaunch";

const SettingNavigator = new StackNavigator(
  {
    settingLaunch: {
      screen: SettingLaunch
    }
  },
  {
    headerMode: "none"
  }
);
SettingNavigator.navigationOptions = tabNavigator.Setting;

export default SettingNavigator;
