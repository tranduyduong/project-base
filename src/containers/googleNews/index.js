import React from "react";
import { Text, View, StyleSheet, Button } from "react-native";
import { getGoogleNews } from "./Action";
import { useSelector, useDispatch } from "react-redux";

export default Counter = () => {
  const news = useSelector((state) => state.news);
  console.log('news', news);
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
      <Text>Total news: {news.data.length}</Text>
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
