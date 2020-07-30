import React, { Component } from 'react'
import { Text, View, ActivityIndicator } from 'react-native'
import styles from './WeatherStyle';

export default Loading = () => (
  <View style={styles.loading}>
    <ActivityIndicator />
  </View>
);