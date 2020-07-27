import React from "react";
import { registerRootComponent } from "expo";
import { Text, View, StyleSheet, Button } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import { changeCount, fetchData } from "./actions";
import { useSelector, useDispatch } from "react-redux";

const Counter = () => {
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

  // React.useEffect(() => {
  //   getNews();
  // }, []);
  // const getNews = async () => {
  //   const response = await fetch(
  //     "https://newsapi.org/v2/top-headlines?country=us&apiKey=6eec2f7fe6cd4c40a3fef8f33f5778fe"
  //   );
  //   const data = await response.json();
  //   console.log("data", data);
  // };

  return (
    <View styles={styles.container}>
      <Button title="increment" onPress={() => increment(count)} />
      <Text style={styles.textCenter}>{count}</Text>
      <Button title="decrement" onPress={() => decrement(count)} />

      <Button title="fetch Data" onPress={() => dispatch(fetchData())} />
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
