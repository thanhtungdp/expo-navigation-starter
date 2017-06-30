import React from "react";
import { StackNavigator } from "react-navigation";
import tabNavigator from "config/tabNavigator";
import ProductsLaunch from "./ProductsLaunch";

const ProductsNavigator = new StackNavigator(
  {
	  productsLaunch: {
      screen: ProductsLaunch
    }
  },
  {
    headerMode: "none"
  }
);
ProductsNavigator.navigationOptions = tabNavigator.Products;

export default ProductsNavigator;
