import React, { useState } from 'react'
import { StyleSheet, Text, View, Dimensions, Image } from 'react-native'
import MapView, { Marker, Circle } from 'react-native-maps'
const windowWidth = Dimensions.get('window').width
const windowHeight = Dimensions.get('window').height
const markerImg = require('../../../assets/x.png')
const LATITUDE = 21.037814
const LONGITUDE = 105.781468
const log = (msg, detail) => console.log(msg, detail)
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
        {
          <Marker
            draggable
            title='hehe'
            description='description'
            // image={markerImg}
            // icon="https://cdn5.vectorstock.com/i/1000x1000/05/44/map-marker-icon-vector-12860544.jpg"
            coordinate={x}
            onSelect={e => log('onSelect', e)}
            onDrag={e => log('onDrag', e)}
            onDragStart={e => log('onDragStart', e)}
            onDragEnd={e => log('onDragEnd', e.nativeEvent.coordinate)}
            onPress={e => log('onPress', e)}
            draggable
          />
        }
        {/*
        <Marker coordinate={x} title={"Parking Meter"} key={11}>
          <Image source={markerImg} style={{ height: 100, width: 100 }} />
        </Marker>
        */}

        <Circle
          zIndex={1}
          center={x}
          radius={2000}
          strokeWidth={0.5}
          strokeColor={'rgba(76, 217, 100, 0.9)'}
          fillColor={'rgba(76, 217, 100, 0.1)'}
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
