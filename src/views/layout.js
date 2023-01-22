import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Layout = () => {
  return (
    <View style={Styles.Container}>
      <View style={Styles.Row1}>
        <View style={Styles.Col1}>
          <Text style={Styles.text}>1</Text>
        </View>
        <View style={Styles.Col2}>
          <Text style={Styles.text}>2</Text>
        </View>
        <View style={Styles.Col3}>
          <Text style={Styles.text}>3</Text>
        </View>
      </View>
      <View style={Styles.Row2}>
        <View style={Styles.Col4}>
          <Text style={Styles.text}>4</Text>
        </View>
      </View>
      <View style={Styles.Row3}>
        <View style={Styles.Col5}>
          <Text style={Styles.text}>5</Text>
        </View>
      </View>
      <View style={Styles.Row4}>
        <View style={Styles.col6}>
          <Text style={Styles.text}>6</Text>
        </View>
        <View style={Styles.col7}>
          <Text style={Styles.text}>7</Text>
        </View>
      </View>
    </View>
  );
};
const Styles = StyleSheet.create({
  Container: {
    flex: 1,
  },
  Row1: {
    flexDirection: 'row',
    flex: 1,
  },
  Col1: {
    flex: 1,
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Col2: {
    flex: 2,
    backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Col3: {
    flex: 3,
    backgroundColor: 'yellow',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Row2: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: 'red',
    flex: 1,
  },
  Col4: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  Col5: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },

  Row3: {
    flexDirection: 'row',
    alignItems: 'stretch',
    backgroundColor: 'green',
    flex: 1,
  },
  Row4: {
    alignItems: 'stretch',
    flexDirection: 'row',
    flex: 7,
    justifyContent: 'center',
  },
  col6: {
    backgroundColor: 'purple',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  col7: {
    backgroundColor: 'blue',
    flexDirection: 'column',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    fontSize: 50,
    color: 'black',
  },
});
export default Layout;
