import Colors from "./colors";
import { valueForIos } from "../utils";

export const tabBarStyle = {
  activeTintColor: Colors.primaryColor,
  inactiveTintColor: "#a8a8a8",
  style: {
    backgroundColor: "#ffffff",
    shadowColor: "red",
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    borderColor: "green",
    paddingBottom: valueForIos(5, 0),
    paddingTop: 5,
    paddingLeft: 0,
    paddingRight: 0,
    height: 60
  },
  labelStyle: {
    fontFamily: "System",
    fontSize: valueForIos(12, 8),
    position: "relative",
    top: valueForIos(0, -5)
  },
  showIcon: true,
  indicatorStyle: {
    backgroundColor: Colors.primaryColor
  }
};


export default {
	tabBarStyle
}