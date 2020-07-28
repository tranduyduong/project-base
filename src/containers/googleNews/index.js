import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { getGoogleNews } from "./Action";
import { useSelector, useDispatch } from "react-redux";

export default Counter = () => {
  const counter = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <Text
        style={{
          marginTop: 10,
          fontSize: 30,
        }}
      >
        Google News
      </Text>
      <Button title="fetch Data" onPress={() => dispatch(getGoogleNews())} />
    </View>
  );
};

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
