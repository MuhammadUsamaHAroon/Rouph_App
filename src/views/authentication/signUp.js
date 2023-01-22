import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Alert,
  Pressable,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {setName, setEmail} from '../../../config/store/actions';
import {bindActionCreators} from 'redux';
const SignUp = () => {
  const navigation = useNavigation();
  const {name, email} = useSelector(state => state.userReducer);
  const dispatch = useDispatch();
  // const {setName, setEmail} = bindActionCreators(dispatch);
  const [userName, setUserName] = useState('');
  const [userEmail, setUserEmail] = useState('');

  const setData = async () => {
    if (userName.length === 0 || userEmail.length === 0) {
      Alert.alert('WARNING!', 'Do not Empty Field');
    } else {
      try {
        // dispatch(setName(userName));
        // dispatch(setEmail(userEmail));
        await AsyncStorage.setItem('userName', userName);
        await AsyncStorage.setItem('userEmail', userEmail);
        navigation.navigate('Login');
      } catch (e) {
        Alert.alert('ERROR!', e);
      }
    }
  };

  return (
    <View style={styles.body}>
      <Text style={styles.title}>SignUp</Text>
      <TextInput
        placeholder="Your Name"
        type="text"
        onChangeText={value => setUserName(value)}
        // name="UserName"
        style={styles.input}
      />
      <TextInput
        placeholder="Your email"
        keyboardType="email-address"
        onChangeText={value => setUserEmail(value)}
        // name="Email"
        style={styles.input}
      />
      <Pressable
        onPress={setData}
        hitSlop={{top: 20, bottom: 20, right: 20, left: 20}}
        android_ripple={{color: '#00f'}}
        style={({pressed}) => [
          styles.btn,
          {
            backgroundColor: pressed ? '#dddd' : '#ff7f00',
          },
        ]}>
        <Text style={styles.btn_text}>SignUp</Text>
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
    color: 'black',
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

export default SignUp;
