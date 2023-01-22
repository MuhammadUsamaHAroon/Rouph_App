import {createDrawerNavigator} from '@react-navigation/drawer';
import AntDesign from 'react-native-vector-icons/dist/AntDesign';
import List from '../../src/views/list';
import AlertView from '../../src/views/alert';
import ChatView from '../../src/views/Todo/index';

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return <MyDrawer />;
}

function MyDrawer() {
  return (
    <Drawer.Navigator
      edgeWidth={300}
      screenOptions={{
        drawerPosition: 'left',
        drawerType: 'back',
        drawerType: 'front',
        hideStatusBar: false,
        overlayColor: '#00000090',
        headerShown: true,
        swipeEnabled: false,
        gestureEnabled: false,
        headerTitleAlign: 'center',
        headerStyle: {backgroundColor: 'coral'},
        headerTintColor: '#fff',
        headerTitleStyle: {
          fontSize: 30,
          fontWeight:'900',
        },
        drawerStyle: {
          backgroundColor: '#fff',
          width: 250,
        },
      }}>
      <Drawer.Screen
        name="List"
        component={List}
        options={{
          title: 'Home',
          drawerIcon: ({focused}) => (
            <AntDesign
              name="home"
              color={focused ? 'coral' : 'gray'}
              size={focused ? 28 : 23}
            />
          ),
          drawerActiveTintColor: 'coral',
        }}
      />
      <Drawer.Screen
        name="AlertView"
        component={AlertView}
        options={{
          title: 'Input',
          drawerIcon: ({focused}) => (
            <AntDesign
              name="user"
              color={focused ? 'coral' : 'gray'}
              size={focused ? 28 : 23}
            />
          ),

          drawerActiveTintColor: 'coral',
        }}
      />
      <Drawer.Screen
        name="ChatView"
        component={ChatView}
        options={{
          title: 'Chates',
          drawerIcon: ({focused}) => (
            <AntDesign
              name="wechat"
              color={focused ? 'coral' : 'gray'}
              size={focused ? 28 : 23}
            />
          ),
          drawerActiveTintColor: 'coral',
        }}
      />
    </Drawer.Navigator>
  );
}
