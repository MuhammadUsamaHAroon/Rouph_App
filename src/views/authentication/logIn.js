import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setName, setEmail} from '../../../config/store/actions';
import {useRoute} from '@react-navigation/native';
import {panGestureHandlerCustomNativeProps} from 'react-native-gesture-handler/lib/typescript/handlers/PanGestureHandler';
import PushNotification from 'react-native-push-notification';

const LogIn = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const {name, email} = useSelector(state => state.userReducer);
  console.log(name, email);
  const dispatch = useDispatch();
  const [userName, setUserName] = useState();
  const [userEmail, setUserEmail] = useState();
  // setUserName(name)
  // setUserEmail(email)

  const getData = async () => {
    try {
      const name = await AsyncStorage.getItem('userName');
      const email = await AsyncStorage.getItem('userEmail');

      if (name !== null || email !== null) {
        dispatch(setName(name));
        dispatch(setEmail(email));
      }
    } catch (e) {
      Alert.alert('ERROR', e);
    }
  };
  useEffect(() => {
    getData();
    createChannels();
  }, []);
  const createChannels = () => {
    PushNotification.createChannel({
      channelId: 'test-channel',
      channelName: 'Test Channel',
    });
  };

  const logInData = async () => {
    if (name.length === 0 || email.length === 0) {
      Alert.alert('WARNING!', 'Do not Empty Field');
    } else {
      try {
        dispatch(setName(name));
        dispatch(setEmail(email));
        navigation.navigate('Home');

        // setName('')
        // setEmail('')
      } catch (e) {
        Alert.alert('ERROR!', e);
      }
    }
  };
  return (
    <View style={styles.body}>
      <Text style={styles.title}>LogIn</Text>
      <TextInput
        placeholder="Your Name"
        type="text"
        value={name}
        style={styles.input}
        onChangeText={value => dispatch(setName(value))}
      />
      <TextInput
        placeholder="Your email"
        type="email"
        onChange={value => dispatch(setEmail(value))}
        value={email}
        style={styles.input}
      />
      <Pressable
        onPress={logInData}
        hitSlop={{top: 20, bottom: 20, right: 20, left: 20}}
        android_ripple={{color: '#00f'}}
        style={({pressed}) => [
          styles.btn,
          {
            backgroundColor: pressed ? '#dddd' : '#ff7f00',
          },
        ]}>
        <Text style={styles.btn_text}>LogIn</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    margin: 15,
    textAlign: 'center',
    fontSize: 30,
    fontWeight: 'bold',
    color: 'purple',
  },
  input: {
    borderWidth: 2,
    borderColor: '#fff',
    width: 300,
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 15,
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  btn: {
    backgroundColor: 'green',
    width: 150,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
    borderRadius: 10,
    height: 45,
  },
  btn_text: {
    color: '#eee',
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default LogIn;
