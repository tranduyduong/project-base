import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions } from 'react-native'
import MapView, { Marker } from 'react-native-maps'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height

const LATITUDE = 21.037814
const LONGITUDE = 105.781468
const log = msg => console.log(msg)
export default function Map () {
  const [x, setX] = useState({ latitude: LATITUDE, longitude: LONGITUDE })
  return (
    <View style={styles.container}>
      <MapView
        style={styles.mapView}
        // provider='google'
        initialRegion={{
          latitude: LATITUDE,
          longitude: LONGITUDE,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
      >
        <Marker
          draggable
          coordinate={x}
          onSelect={e => log('onSelect', e)}
          onDrag={e => log('onDrag', e)}
          onDragStart={e => log('onDragStart', e)}
          onDragEnd={e => log('onDragEnd', e)}
          onPress={e => log('onPress', e)}
          draggable
        />
      </MapView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  mapView: {
    width: windowWidth,
    height: windowHeight
  }
})
