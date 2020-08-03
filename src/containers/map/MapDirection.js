import React from "react";
import { StyleSheet, View, Dimensions } from "react-native";
import MapView from "react-native-maps";
import MapViewDirections from 'react-native-maps-directions';
const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height;
const LATITUDE = 21.037814;
const LONGITUDE = 105.781468;
//21.0284297,105.77608
const origin = {latitude: 21.037814, longitude: 105.781468};
const destination = {latitude: 21.0284297, longitude: 105.77608};
const GOOGLE_MAPS_APIKEY = 'AIzaSyDrKpgElbyT79g3IxvW7gcp0aVUxgdgVCQ';

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

      >
      <MapViewDirections
    origin={origin}
    destination={destination}
    apikey={GOOGLE_MAPS_APIKEY}
    strokeWidth={3}
    strokeColor="hotpink"
    optimizeWaypoints={true}
  /></MapView>
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
