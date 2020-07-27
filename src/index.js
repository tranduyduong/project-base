import React from "react";
import { registerRootComponent } from "expo";
import { Text, View, StyleSheet, Button } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import { changeCount } from "./actions";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const { count } = counter;

  const increment = (count) => {
    dispatch(changeCount(++count));
  };

  const decrement = (count) => {
    dispatch(changeCount(--count));
  };
  return (
    <View styles={styles.container}>
      <Button title="increment" onPress={() => increment(count)} />
      <Text style={styles.textCenter}>{count}</Text>
      <Button title="decrement" onPress={() => decrement(count)} />
    </View>
  );
};
const App = ({ params }) => (
  <Provider store={store}>
    <Counter />
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
