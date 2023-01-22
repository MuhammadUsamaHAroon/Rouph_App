import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  FlatList,
  Button,
  Pressable,
  Alert,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import { color } from 'react-native-reanimated';
import AntDesign from 'react-native-vector-icons/AntDesign';
// import Task from '../../components/task';
// import CheckBox from '@react-native-community/checkbox';
// const icon = <AntDesign name={'comments'} />;

export default function Todo() {
  const dummy = ['Usama', 'Aziz', 'Taha', 'Rafay', 'Muzammil'];
  const [data, setData] = useState([]);
  const [input, setInput] = useState('');
  const [alert, setAlert] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  console.log(data);
  const addData = () => {
    if (!input) {
      Alert.alert('Wrong', 'Todo Cannot be empty', [
        {
          text: 'Cancel',
          onPress: () => console.log('Cancel Pressed'),
          style: 'cancel',
        },
        {text: 'OK', onPress: () => console.log('OK Pressed')},
      ]);
    } else {
      setData([...data, input]);
      setInput('');
    }
  };

  const deleteItem = index => {
    const copyData = [...data];
    copyData.splice(index, 1);
    setData(copyData);
  };
  return (
    <View style={style.container}>
      <Text style={style.title}>today's tasks</Text>
      <ScrollView>
        {data.map((item, index) => {
          return (
            <TouchableOpacity
              style={style.itemWrapper}
              onPress={() => deleteItem(index)}
              key={index}>
              <View style={style.itemSection}>
                <View style={style.insiedeSectionBox}>
                  <View style={style.squareContainer}>
                    <View style={style.squareBox}></View>
                  </View>
                  <Text style={style.itemText}>{item}</Text>
                </View>
                <View style={style.checkBoxSection}>
                  {/* <CheckBox
                    disabled={false}
                    value={toggleCheckBox}
                    onValueChange={newValue => setToggleCheckBox(newValue)}
                  /> */}
                </View>
              </View>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <View style={style.bottomWrapper}>
        <TextInput
          placeholder="Enter Task..."
          style={style.input}
          onChangeText={e => setInput(e)}
          value={input}
        />
        <TouchableOpacity style={style.addBtn} onPress={addData}>
          <AntDesign name={'plus'} size={20} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    height: '100%',
    fontFamily: 'Ubuntu-Italic',
  },
  title: {
    textAlign: 'left',
    marginTop: 30,
    marginLeft: 20,
    marginBottom: 25,
    textTransform: 'capitalize',
    fontSize: 36,
    color: '#e026c8',
    fontWeight: 'bold',
  },
  input: {
    margin: 20,
    borderWidth: 1,
    fontSize: 18,
    textTransform: 'capitalize',
    borderRadius: 60,
    width: '70%',
    borderColor: 'royalblue',
    backgroundColor: 'royalblue',
    marginTop: 30,
    paddingLeft: 20,
    paddingTop: 13,
    paddingBottom: 13,
    
  },
  addBtn: {
    width: 70,
    height: 70,
    padding: 10,
    marginVertical: 10,
    borderRadius: 50,
    alignSelf: 'center',
    backgroundColor: '#e026c8',
    marginBottom: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bottomWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginRight: 20,
    position: 'absolute',
    bottom: 1,
  },
  itemSection: {
    marginLeft: 20,
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 15,
    width: '90%',
    borderRadius: 10,
    marginTop: 5,
    backgroundColor: '#062666',
    flexDirection: 'row',
    justifyContent: 'space-between',
    // fontFamily: 'UbuntU-Light',
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
    width: '70%',
    fontFamily: 'Fasthand',
  },
  squareContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
  },
  insiedeSectionBox: {
    flexDirection: 'row',
    alignItems: 'center',
    flexWrap: 'wrap',
  },
  squareBox: {
    width: 27,
    height: 27,
    backgroundColor: '#42f5ec',
    borderRadius: 5,
    marginRight: 15,
    marginLeft: 5,
  },
  checkBoxSection: {
    alignItems: 'center',
    marginRight: 15,
  },
  checkBox: {
    borderWidth: 1,
    border: '#fff',
  },
});
