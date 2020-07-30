import { StatusBar } from "expo-status-bar";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
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
import { delay } from "./utils";
import styles from "./WeatherStyle.js";
import WeatherCard from './WeatherCard';
import CitySelectionButtons from './CitySelectionButtons';
import Loading from './Loading';
import { getWeather } from './Action';

export default function Weather() {
  const [loading, setLoading] = useState(true);
  const [location, setLocation] = useState({});
  const [error, setError] = useState(false);

  const [cityName, setCityName] = useState("Hanoi");
  const dispatch = useDispatch();
  const weather = useSelector((state) => state.weather);
  useEffect(() => {
    getLocationAsync();
  }, []);

  getLocationAsync = async () => {
    const { status } = await Permissions.askAsync(Permissions.LOCATION);
    if (status !== "granted") {
      return;
    }
    const location = await Location.getCurrentPositionAsync();
    dispatch(getWeather(location.coords.latitude, location.coords.longitude));
  };

  onChooseCity = (name) => {
    let randImg = "";
    if (name !== "") {
      setCityName(name);
      const city = CITIES.find((city) => city.name === name);
      randImg = city.imgUrl[Math.floor(Math.random() * city.imgUrl.length)];
      dispatch(getWeather(city.latitude, city.longitude));
    } else {
      getLocationAsync();
    }
  };

  if (!weather.data.main) {
    return <Loading />;
  }

  const city = CITIES.find((city) => city.name == cityName);
  const randImg = city.imgUrl[Math.floor(Math.random() * city.imgUrl.length)];

  const bgImage = {
    uri: randImg || getWeatherBackgroundImage(location.weather[0].main),
  };
  return (
    <ImageBackground source={bgImage} style={styles.bg}>
      <WeatherCard  loading={loading} location={weather.data} />
      <CitySelectionButtons onChooseCity={onChooseCity} />
    </ImageBackground>
  );
}