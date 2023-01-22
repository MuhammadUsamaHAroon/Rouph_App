import React, {useState} from 'react';
import {View, Text, Modal, Button} from 'react-native';

export default function Home() {
  const [show, setShow] = useState(false);
  return (
    <View style={{marginTop: 50}}>
      {show ? (
        <View>
          <Text style={{fontSize: 50, color: 'green'}}>Muhammad</Text>
          <Button title="Open" onPress={() => setShow(true)} />
        </View>
      ) : (
        <Modal transparent={true} visible={true}>
          <View style={{backgroundColor: '#000000aa', flex: 1}}>
            <View
              style={{
                flex: 1,
                margin: 50,
                padding: 40,
                backgroundColor: '#fff',
                borderRadius: 10,
                height: 30,
              }}>
              <Text style={{fontSize: 50, color: 'black'}}>Usama</Text>
              <Button title="Close" onPress={() => setShow(false)} />
            </View>
          </View>
        </Modal>
      )}
      {/* <View>
        <Text style={{fontSize: 50, color: 'green'}}>Muhammad</Text>
        <Button title="Open" onPress={() => setShow(true)} />
      </View> */}
      {/* <Modal transparent={true} visible={true}>
        <View style={{backgroundColor: '#000000aa', flex: 1}}>
          <View
            style={{
              flex: 1,
              margin: 50,
              padding: 40,
              backgroundColor: '#fff',
              borderRadius: 10,
              height: 30,
            }}>
            <Text style={{fontSize: 50, color: 'black'}}>Usama</Text>
            <Button title="Close" onPress={() => setShow(false)} />
          </View>
        </View>
      </Modal> */}
    </View>
  );
}
