import React, { Component } from "react";
import { Text, View, TouchableOpacity } from "react-native";
import { CITIES } from "./utils";
import styles from './WeatherStyle';

export default CitySelectionButtons = (props) => (
  <View style={styles.cityContainer}>
    <TouchableOpacity
      key="currentLocation"
      style={styles.currentLocation}
      onPress={() => props.onChooseCity("")}
    >
      <Text style={styles.cityName}>Current Location</Text>
    </TouchableOpacity>
    {CITIES.map((city) => {
      return (
        <TouchableOpacity
          key={city.name}
          style={styles.cityButton}
          onPress={() => props.onChooseCity(city.name)}
        >
          <Text style={styles.cityName}>{city.name}</Text>
        </TouchableOpacity>
      );
    })}
  </View>
);
