import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  FlatList,
  SectionList,
  RefreshControl,
  StyleSheet,
  refreshControl,
  TouchableOpacity,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getCities} from '../../config/store/actions';
import PushNotification from 'react-native-push-notification';
import {useNavigation} from '@react-navigation/native';
const List = () => {
  const navigation = useNavigation();
  const {cities} = useSelector(state => state.userReducer);
  console.log(cities);
  const dispatch = useDispatch();
  // useEffect(() => {
  //   setRefreshing(true);
  // }, [refreshing]);
  useEffect(() => {
    dispatch(getCities());
  }, []);
  const [items, setItems] = useState([
    {name: 'Item 1'},
    {name: 'Item 2'},
    {name: 'Item 3'},
    {name: 'Item 4'},
    {name: 'Item 5'},
    {name: 'Item 6'},
  ]);
  const [products, setProducts] = useState([
    {
      title: ' Title 1',
      data: ['Item 1-1'],
    },
  ]);
  const [count, setCount] = useState(2);
  console.log(products);
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    setCount(count + 1);
    setProducts([
      ...products,
      {
        title: `Title ${count}`,
        data: [`Item ${count}-1`, `Item ${count}-2`, `Item ${count}-3`],
      },
    ]);
    setRefreshing(false);
  };
  const handleNotification = (item, index) => {
    // PushNotification.cancelAllNotification();
    PushNotification.localNotification({
      channelId: 'test-channel',
      title: 'You Click on ' + item.name,
      message: item.city,
      bigText:
        item.city + ' Is one of the largest and beautiful city in the world',
      color: 'red',
    });
    // PushNotification.localNotificationSchedule({
    //   channelId: 'test-channel',
    //   title: 'Alarm',
    //   message: 'You click ' + item.city + ' 10 seconds ago',
    //   date: new Date(Date.now() + 10 * 1000),
    //   allowWhileIdle: true,
    // });
  };
  return (
    <View>
      <FlatList
        // horizontal
        // inverted
        keyExtractor={(item, index) => index.toString()}
        data={cities}
        renderItem={({item, index}) => {
          return (
            <TouchableOpacity
              onPress={() => {
                handleNotification(item, index);
                navigation.navigate('map', {
                  city: item.city,
                  lat: item.lat,
                  lng: item.lng,
                });
              }}>
              <View style={styles.sectionContainer}>
                <Text style={styles.sectionTitle}>{item.country}</Text>
                <Text style={styles.sectionContainer}>{item.city}</Text>
              </View>
            </TouchableOpacity>
          );
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['green']}
          />
        }
      />
      {/* <SectionList
        keyExtractor={(item, index) => index.toString()}
        sections={products}
        renderItem={({item}) => {
          return <Text style={styles.sectionContainer}>{item}</Text>;
        }}
        renderSectionHeader={({section}) => {
          return (
            <View>
              <Text style={styles.sectionTitle}>{section.title}</Text>
            </View>
          );
        }}
        refreshControl={
          <RefreshControl
            refreshing={refreshing}
            onRefresh={onRefresh}
            colors={['blue']}
          />
        }
      /> */}
    </View>
  );
};
const styles = StyleSheet.create({
  sectionTitle: {
    backgroundColor: 'coral',
    fontSize: 30,
    fontWeight: 'bold',
    color: '#eee',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    margin: 15,
    padding: 10,
  },
  sectionContainer: {
    color: 'black',
    fontSize: 25,
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    fontWeight: '600',
  },
});
export default List;
