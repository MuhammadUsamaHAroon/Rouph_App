import React, {useState, useEffect} from 'react';
import {View, Text, StyleSheet, Alert, Button} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useDispatch, useSelector} from 'react-redux';
import {setName, setEmail} from '../../config/store/actions';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useNavigation} from '@react-navigation/native';
// import {Button} from 'react-native-vector-icons/dist/MaterialCommunityIcons';
// https://mocki.io/v1/e5bf7ef4-fd7d-44cb-abb0-2cd5c35d968c
// https://mocki.io/v1/c41fee51-7d0b-495b-8c15-6297bd1c4d26

const Home = ({route}) => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');
  const {name, email} = useSelector(state => state.userReducer);
  const getData = async () => {
    try {
      const name = await AsyncStorage.getItem('userName');
      const email = await AsyncStorage.getItem('userEmail');

      if (name !== null || email !== null) {
        // value previously stored
        dispatch(setName(name));
        dispatch(setEmail(email));
      }
    } catch (e) {
      Alert.alert('ERROR!', e);
    }
  };
  // const updateData = async () => {
  //   try {
  //     await AsyncStorage.setItem('userName', userName);
  //     await AsyncStorage.setItem('userEmail', userEmail);
  //   } catch (e) {
  //     Alert.alert('ERROR!', e);
  //   }
  // };
  useEffect(() => {
    getData();
    // updateData();
  }, []);
  // // const onHandleCamera = () => {
  // //   navigation.navigate('camera');
  // };
  return (
    <View style={styles.home}>
      <Text style={styles.text}>{`Welcome to ${name}`}</Text>
      <Text style={styles.text}>{`Welcome to ${email}`}</Text>
      <Button
        title="Open to Camera"
        // style={styles.camera}
        onPress={() => {
          navigation.navigate('camera');
        }}
      />
    </View>
  );
};
const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItem: 'center',
  },
  text: {
    textAlign: 'center',
    margin: 15,
    fontSize: 30,
    color: 'blue',
  },
  camera: {
    width: 70,
    // height: 70,
    // padding: 10,
    marginVertical: 10,
    // borderRadius: 50,
    // alignSelf: 'center',
    // backgroundColor: '#e026c8',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:10
  },
});
export default Home;
