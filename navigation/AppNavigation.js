import { TabNavigator } from "react-navigation";
import navigation from "themes/navigation";
import News from "containers/news";
import Products from "containers/products";
import RequestClient from "containers/request-client";
import Setting from "containers/setting";

export default new TabNavigator(
  {
    news: {
      screen: News
    },
    products: {
      screen: Products
    },
    requestClient: {
      screen: RequestClient
    },
    setting: {
      screen: Setting
    }
  },
  {
    headerMode: "none",
    tabBarOptions: navigation.tabBarStyle,
    tabBarPosition: "bottom"
  }
);
