/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {
  Alert,
  FlatList,
  RefreshControl,
  SafeAreaView,
  ScrollView,
  SectionList,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import List from './src/views/list';
import AlertView from './src/views/alert';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigator from './config/route/navigation';
import DrawerNavigator from './config/route/drawer';
import {Provider} from 'react-redux'
import {Store} from './config/store/store'
const App = () => {
  return (
    <Provider store={Store}>
    <NavigationContainer>
      <MainNavigator />
    </NavigationContainer>
    </Provider>
  );
};

const styles = StyleSheet.create({
  // sectionContainer: {
  //   flex: 1,
  //   paddingHorizontal: 24,
  //   color: 'black',
  //   backgroundColor: '#fff',
  // },
  // sectionTitle: {
  //   fontSize: 24,
  //   fontWeight: '600',
  //   color: '#fff',
  //   textAlign: 'center',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // },
  // sectionDescription: {
  //   marginTop: 8,
  //   fontSize: 18,
  //   fontWeight: '400',
  // },
  // highlight: {
  //   fontWeight: '700',
  // },
});

export default App;
