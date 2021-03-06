import React from "react";
import { registerRootComponent } from "expo";
import { Text, View, StyleSheet, Button } from "react-native";
import { Provider } from "react-redux";
import store from "./store";

import Counter from "./containers/counter";
import GoogleNews from "./containers/googleNews";
import Weather from './containers/weather';
import Review from './containers/review';
import Map from './containers/map';

const App = ({ params }) => (
  <Provider store={store}>
    <Map />
    {/*<Counter />
    <GoogleNews />*/}
  </Provider>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textCenter: {
    textAlign: "center",
  },
});
registerRootComponent(App);
