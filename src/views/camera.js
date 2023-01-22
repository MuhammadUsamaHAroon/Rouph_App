import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Button} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/dist/MaterialCommunityIcons';
import {RNCamera} from 'react-native-camera';
import {useCamera} from 'react-native-camera-hooks';

export default function Camera() {
  const [{cameraRef}, {takePicture}] = useCamera(null);

  const onHandlerCapture = async () => {
    try {
      const data = await takePicture();
      console.log(data.uri);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <View style={styles.body}>
      <RNCamera
        ref={cameraRef}
        type={RNCamera.Constants.Type.back}
        onPress={onHandlerCapture}
        style={styles.preview}>
        {/* <Button title="Capture" onPress={onHandlerCapture}/> */}
      </RNCamera>
    </View>
  );
}
const styles = StyleSheet.create({
  body: {
    flex: 1,
  },
  preview: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
