import React, {useState} from 'react';
import {View, Text, StyleSheet, Button} from 'react-native';

const Counter = () => {
  const [counter, setCounter] = useState(0);
  const [text, setText] = useState(0);
  const clickHandler = () => {
    setCounter(counter + 5);
    setText(text + 1);
  };
  return (
    <View style={Styles.CounterWrapper}>
      <Text style={Styles.counter}>{counter}</Text>
      <Button title="Click Me" onPress={() => clickHandler()} />
      <Text style={Styles.CounterText}>click me {text} times</Text>
    </View>
  );
};
const Styles = StyleSheet.create({
  CounterWrapper: {
    flex: 1,
    backgroundColor: 'royalblue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  counter: {
    Color: '#fff',
    fontWeight: 'bold',
    fontSize: 25,
    margin: 20,
  },
  CounterText: {
    margin: 20,
    fontSize: 20,
  },
});
export default Counter;
