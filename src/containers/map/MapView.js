import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const LATITUDE = 21.037814;
const LONGITUDE = 105.781468;

export default function Map() {
  return (
    <View style={styles.container}>
      <MapView
        provider="google"
        style={styles.mapView}
        // region={{
        //   latitude: LATITUDE,
        //   longitude: LONGITUDE,
        //   latitudeDelta: 0.0922,
        //   longitudeDelta: 0.0421,
        // }}

        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  mapView: {
    width,
    height,
  },
});
