import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { changeCount } from "./Action";
import { useSelector, useDispatch } from "react-redux";

export default Counter = () => {
  const counter = useSelector((state) => state.counter);
  console.log("counter", counter);
  const dispatch = useDispatch();
  const { count } = counter;

  const increment = (count) => {
    dispatch(changeCount(++count));
  };

  const decrement = (count) => {
    dispatch(changeCount(--count));
  };

  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: 10,
          fontSize: 30,
        }}
      >
        Demo Redux
      </Text>
      <Button title="increment" onPress={() => increment(count)} />
      <Text style={styles.textCenter}>{count}</Text>
      <Button title="decrement" onPress={() => decrement(count)} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "red",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textCenter: {
    textAlign: "center",
  },
});
