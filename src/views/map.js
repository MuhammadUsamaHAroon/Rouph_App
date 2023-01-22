import React, {useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import MapView from 'react-native-maps';
const Map = ({route}) => {
  const {city, lat, lng} = route.params;
  console.log(lat, lng);

  return (
    <View style={styles.body}>
      <Text style={styles.text}>{city}</Text>
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 48.8566,
          longitude: 2.3522,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421,
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black',
    margin: 20,
    fontSize: 20,
  },
  map: {
    width: '100%',
    height: '100%',
  },
});
export default Map;
