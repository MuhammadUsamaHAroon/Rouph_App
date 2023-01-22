import React, {useState} from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
const Task = props => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  console.log(toggleCheckBox);
  // const taskDone = () => {
  //   if (toggleCheckBox == true) {
  //     props.deleteItem();
  //   } else {
  //     return [];
  //   }
  // };
  return (
    // <View style={style.itemWrapper}>
    //   <View style={style.itemSection}>
    //     <View style={style.insiedeSectionBox}>
    //       <View style={style.squareContainer}>
    //         <View style={style.squareBox}></View>
    //       </View>
    //       <Text style={style.itemText}>{props.data}</Text>
    //     </View>
    //     <View style={style.checkBoxSection}>
    //       <CheckBox
    //         disabled={false}
    //         value={toggleCheckBox}
    //         onValueChange={newValue => setToggleCheckBox(newValue)}
    //       />
    //     </View>
    //   </View>
    // </View>
  );
};

const style = StyleSheet.create({
  itemWrapper: {},
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
    fontFamily: 'UbuntU-Light',
  },
  itemText: {
    color: '#fff',
    fontSize: 18,
    width: '70%',
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
export default Task;
