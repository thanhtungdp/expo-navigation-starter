import React from "react";
import { StackNavigator } from "react-navigation";
import tabNavigator from "config/tabNavigator";
import NewsLaunch from "./NewsLaunch";

const NewsNavigator = new StackNavigator(
  {
    newsLaunch: {
      screen: NewsLaunch
    }
  },
  {
    headerMode: "none"
  }
);
NewsNavigator.navigationOptions = tabNavigator.News;

export default NewsNavigator;
