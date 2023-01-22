import React, {useState} from 'react';
import {View, Text} from 'react-native';
import CheckBox from '@react-native-community/checkbox';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
const Test = () => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  // const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  // const data = [{name: 'usama'}, {name: 'Aziz'}, {name: 'Taha'}];
  // console.log(toggleCheckBox);
  // for (let i = 1; i <= data.length; i++) {
  //   console.log(i);
  // }
  // data.forEach((element, index, array )=> {
  //   console.log(element.name, index)
  // });
  // for (const key in data) {
  //   if (Object.hasOwnProperty.call(data, key)) {
  //     console.log(data)
  //     const element = data[key];
  //     // console.log(element)
      
  //   }
  // }
  let data = 0
  // while (data <10) {
  //   data +=1
  //   console.log(data)

  // }
  // do {
  //   data++
  //   if(data === 7){
  //     break
  //   }
  //   console.log(data)
  // }while(data < 10)
  // console.log('stop')
  do {
    data++
    if(data === 7){
      data++
      continue
    }
    console.log(data)
  }while(data < 10)
  console.log('stop')
  return (
    <View style={{backgroundColor: 'black', height: '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          marginTop: 50,
          alignSelf: 'center',
        }}>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={newValue => setToggleCheckBox(newValue)}
        />
        {toggleCheckBox ? (
          <View style={{flexDirection: 'row'}}>
            <Text>Liked</Text>
            <FontAwesome5
              name={'thumbs-up'}
              size={30}
              color="skyblue"
              style={{marginLeft: 20}}
            />
          </View>
        ) : (
          <View style={{flexDirection: 'row'}}>
            <Text>Liked</Text>
            <FontAwesome5
              name={'thumbs-down'}
              size={30}
              color="skyblue"
              style={{marginLeft: 20}}
            />
          </View>
        )}
      </View>
    </View>
  );
};
export default Test;
