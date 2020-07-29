import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import * as Location from "expo-location";
import * as Permissions from "expo-permissions";
import {
  ActivityIndicator,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TouchableOpacity,
} from "react-native";
import { MaterialIcons, MaterialCommunityIcons } from "@expo/vector-icons";
import { CITIES, getWeatherBackgroundImage, getWeatherIcon } from "./utils";

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));
export default function Weather() {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({});
  const [error, setError] = useState(false);
  const [cityName, setCityName] = useState('Hanoi');

  useEffect(async () => {
    // await delay(5000);
    this.getLocationAsync();
  }, []);

  
  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    console.log("status", status);
    if (status !== "granted") {
      return;
    }

    const location = await Location.getCurrentPositionAsync();
    console.log("location", location);
    this.getWeather(location.coords.latitude, location.coords.longitude);
  };

  getWeather = async (latitude, longitude, imgUrl = "") => {
    const API_KEY = "3de6162d3745365b168ade2bbe4e1d66";
    const api = `http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}`;
    try {
      const response = await fetch(api);
      const jsonData = await response.json();
      console.log("jsonData", jsonData);
      setLocation(jsonData);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(false);
    }
  };

  onChooseCity = (name) => {
    let randImg = "";
    if (name !== "") {
      setCityName(name);
      const city = CITIES.find((city) => city.name === name);
      randImg = city.imgUrl[Math.floor(Math.random() * city.imgUrl.length)];
      this.getWeather(city.latitude, city.longitude, randImg);
    } else {
      this.getLocationAsync();
    }
  };

  if (loading) {
    return <Loading />;
  }

  const city = CITIES.find((city) => city.name == cityName);
  const randImg = city.imgUrl[Math.floor(Math.random() * city.imgUrl.length)];

  const bgImage = {
    uri: randImg || getWeatherBackgroundImage(location.weather[0].main),
  };
  return (
    <ImageBackground source={bgImage} style={styles.bg}>
      <WeatherCard error={error} loading={loading} location={location} />
      <CitySelectionButtons onChooseCity={onChooseCity} />
    </ImageBackground>
  );
}


const CitySelectionButtons = (props) => (
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

const WeatherCard = ({ location, error, loading }) => {
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

  if (error) {
    return (
      <View style={styles.container}>
        <Text>Error fetching weather!</Text>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.weatherContainer}>
        {loading && <Loading />}
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

const Loading = () => (
  <View style={styles.loading}>
    <ActivityIndicator />
  </View>
);

const styles = StyleSheet.create({
  bg: {
    flex: 1,
    width: "100%",
    height: "100%",
    backgroundColor: "black",
  },
  container: {
    alignItems: "center",
    justifyContent: "center",
  },
  weatherContainer: {
    padding: 20,
    width: "90%",
    borderWidth: 1,
    maxWidth: "90%",
    minHeight: "20%",
    marginTop: "70%",
    borderRadius: 25,
    marginBottom: "2%",
    borderColor: "white",
    backgroundColor: "rgba(0,0,0,0.4)",
  },
  text: {
    fontSize: 20,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
  },
  row: {
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
  },
  cityContainer: {
    flex: 1,
    flexWrap: "wrap",
    flexDirection: "row",
    justifyContent: "space-around",
  },
  cityName: {
    fontSize: 12,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
  cityButton: {
    margin: 3,
    height: 40,
    padding: 3,
    width: "25%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  tempRow: {
    alignSelf: "center",
    flexDirection: "row",
  },
  locationText: {
    fontSize: 25,
    color: "white",
    marginLeft: 10,
    fontWeight: "bold",
    textDecorationLine: "underline",
  },
  loading: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  currentLocation: {
    margin: 3,
    height: 40,
    padding: 3,
    width: "72.5%",
    borderWidth: 1,
    borderRadius: 10,
    borderColor: "white",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "rgba(20,33,61,0.6)",
  },
});
