import React, {useEffect} from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import image from '../assets/images/React-icon.svg.png';
const Splash = () => {
  const navigation = useNavigation();
  return (
    <View style={Styles.splashWrapper}>
      <Image
        style={Styles.tinyLogo}
        source={require('../assets/images/React-icon.svg.png')}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  splashWrapper: {
    flex: 1,
    backgroundColor: '#fff',
    color: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tinyLogo: {
    height: 230,
    width: 250,
    resizeMode: 'stretch',
  },
});

export default Splash;
