import React, { Component, PropTypes } from "react";
import { Provider } from "react-redux";
import AppNavigation from "navigation/AppNavigation";
import createStore from "redux/configureStore";

const store = createStore({});

export default function App() {
  return (
    <Provider store={store}>
      <AppNavigation />
    </Provider>
  );
}
