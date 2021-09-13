import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';

import Home from './src/screens/Home';
import Auth from './src/screens/Auth';
import Cart from './src/screens/cart';
import Profile from './src/screens/profile';
import DrawerMenu from './src/components/DrawerContentMenu/DrawerMenu';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName="Home"
        screenOptions={{headerShown: false}}
        drawerContent={props => <DrawerMenu {...props} />}>
        <Drawer.Screen name="Auth" component={Auth} />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Profile" component={Profile} />
        <Drawer.Screen name="Cart" component={Cart} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

export default App;
