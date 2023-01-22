import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import List from '../../src/views/list';
import AlertView from '../../src/views/alert';
import ChatView from '../../src/views/Todo/index';
import LogIn from '../../src/views/authentication/logIn';
import SignUp from '../../src/views/authentication/signUp';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import Home from '../../src/views/home';
import Map from '../../src/views/map';
import Camera from '../../src/views/camera';

const Tab = createBottomTabNavigator();

export default function MainNavigator() {
  return <MainStack />;
}
function MainStack() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarIcon: ({focused, color, size}) => {
          let iconName;
          if (route.name === 'Home') {
            iconName = 'home';
            size = focused ? 28 : 20;
          } else if (route.name === 'AlertView') {
            iconName = 'user';
            size = focused ? 28 : 20;
          } else if (route.name === 'ChatView') {
            iconName = 'wechat';
            size = focused ? 28 : 20;
          } else if (route.name === 'List') {
            iconName = 'setting';
            size = focused ? 28 : 20;
          }

          return <AntDesign name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: 'coral',
        tabBarInactiveTintColor: 'gray',
        tabBarActiveBackgroundColor: '#eee',
        tabBarShowLabel: true,
        tabBarLabelStyle: {fontSize: 12},
      })}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="List" component={List} />
      {/* <Tab.Screen name="AlertView" component={AlertView} /> */}
      <Tab.Screen
        name="ChatView"
        component={ChatView}
        options={{tabBarBadge: 2}}
      />
      {/* <Tab.Screen name="Login" component={LogIn} />
      <Tab.Screen name="Signup" component={SignUp} /> */}
      <Tab.Screen name="map" component={Map} />
      <Tab.Screen name="camera" component={Camera} />
    </Tab.Navigator>
  );
}
