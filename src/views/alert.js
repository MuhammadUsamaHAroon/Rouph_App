import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Pressable,
  Modal,
  TouchableOpacity,
  Alert,
} from 'react-native';

const AlertView = () => {
  const [submited, setSubmited] = useState(false);
  const [input, setInput] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  console.log(input);
  const onPressHandler = () => {
    if (input.length > 3) {
      setSubmited(true);
    } else {
      setSubmited(false);
      setShowWarning(true);
      //   Alert.alert('Warning*-', 'The name must be 3 characters', [
      //     {
      //       text: 'do not show again',
      //       onPress: () => console.warn('Do not show Pressed'),
      //     },
      //     {text: 'Cancel', onPress: () => console.warn('Cancel pressed')},
      //     {text: 'Okay', onPress: () => console.warn('Okay Pressed')},
      //   ]);
    }
  };
  return (
    <View style={styles.alert_container}>
      <TextInput
        style={styles.input}
        placeholder="Write Something.."
        onChangeText={e => setInput(e)}
      />
      <Pressable
        onPress={onPressHandler}
        hitSlop={{top: 20, bottom: 20, right: 20, left: 20}}
        android_ripple={{color: '#00f'}}
        style={({pressed}) => [
          styles.btn_submit,
          {
            backgroundColor: pressed ? '#dddd' : 'green',
          },
        ]}>
        <Text style={styles.btn_text}>{submited ? 'Clear' : 'Submit'}</Text>
      </Pressable>
      <Modal
        visible={showWarning}
        onRequestClose={() => setShowWarning(false)}
        transparent>
        <View style={styles.center_view}>
          <View style={styles.modal}>
            <View style={styles.modal_title}>
              <Text style={styles.title_text}>warning</Text>
            </View>
            <View style={styles.modal_body}>
              <Text style={styles.modal_message}>
                The name must be longer than 3 characters.
              </Text>
            </View>
            {/* <View style={styles.close_view}> */}
            <Pressable
              onPress={() => setShowWarning(false)}
              android_ripple={{color: '#ff00ff'}}
              style={({pressed}) => [
                styles.modal_btn,
                {
                  backgroundColor: pressed ? '#fff' : '#00ffff',
                },
              ]}>
              <Text style={styles.close_btn}>okay</Text>
            </Pressable>
            {/* </View> */}
          </View>
        </View>
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  alert_container: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  input: {
    borderWidth: 2,
    borderColor: 'lightgray',
    width: 300,
    borderRadius: 10,
    marginTop: 20,
    paddingLeft: 15,
    alignItems: 'center',
  },
  btn_submit: {
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
  center_view: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#00000099',
    flex: 1,
  },
  modal: {
    width: 300,
    height: 250,
    backgroundColor: '#fff',
    justifyContentL: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  modal_title: {
    padding: 10,
    backgroundColor: 'yellow',
    width: '100%',
    borderTopRightRadius: 8,
    borderTopLeftRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    // flex: 1,
  },
  title_text: {
    fontSize: 25,
    fontWeight: 'bold',
    color: 'green',
    textTransform: 'capitalize',
  },
  modal_body: {
    // flex: 3,
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 10,
    marginRight: 10,
    height: 150,
    width: '100%',
  },
  modal_message: {
    fontSize: 20,
    fontWeight: '400',
    textAlign: 'center',
    color: 'black',
  },
  close_view: {},
  modal_btn: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'gray',
    width: '100%',
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    height: 50,
    backgroundColor: '#00ffff',
  },
  close_btn: {
    color: 'black',
    fontSize: 23,
    textTransform: 'capitalize',
  },
});
export default AlertView;
