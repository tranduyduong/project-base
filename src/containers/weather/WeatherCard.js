import React from 'react';
import { View, Text} from 'react-native';
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import styles from './WeatherStyle';
import { CITIES, getWeatherBackgroundImage, getWeatherIcon } from "./utils";

export default WeatherCard = ({ location, error, loading }) => {
  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error fetching weather!</Text>
      </View>
    );
  }

  console.log("location", location);
  const temperatureC = (location.main.temp - 273.15).toFixed(2);
  const temperatureF = (((location.main.temp - 273.15) * 9) / 5 + 32).toFixed(
    2
  );
  const description = location.weather[0].description;
  const windSpeed = location.wind.speed;
  const icon = location.weather[0].main;

  const capitalizedDescription =
    description && description.charAt(0).toUpperCase() + description.slice(1);

  
  return (
    <View style={styles.container}>
      <View style={styles.weatherContainer}>
        <View style={styles.row}>
          <MaterialIcons name="location-city" size={25} color="lightgrey" />
          <Text style={styles.locationText}>{location.name}</Text>
        </View>
        <View style={[styles.row, { marginTop: 10 }]}>
          <MaterialCommunityIcons
            size={25}
            color="lightgrey"
            name="speedometer"
          />
          <Text style={styles.text}>{windSpeed}</Text>
        </View>
        <View style={styles.row}>
          <MaterialCommunityIcons
            size={25}
            color="lightgrey"
            name={getWeatherIcon(icon)}
          />
          <Text style={styles.text}>{capitalizedDescription}</Text>
        </View>

        <View style={styles.tempRow}>
          <View style={styles.row}>
            <MaterialCommunityIcons
              size={25}
              color="lightgrey"
              name="temperature-fahrenheit"
            />
            <Text style={styles.text}>{temperatureF}</Text>
          </View>
          <View style={styles.row}>
            <MaterialCommunityIcons
              size={25}
              color="lightgrey"
              name="temperature-celsius"
            />
            <Text style={styles.text}>{temperatureC}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};