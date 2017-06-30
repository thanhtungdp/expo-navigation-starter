import React from "react";
import { StackNavigator } from "react-navigation";
import tabNavigator from "config/tabNavigator";
import RequestClientLaunch from "./RequestClientLaunch";

const RequestClientNavigator = new StackNavigator(
  {
	  requestClientLaunch: {
      screen: RequestClientLaunch
    }
  },
  {
    headerMode: "none"
  }
);
RequestClientNavigator.navigationOptions = tabNavigator.RequestClient;

export default RequestClientNavigator;
