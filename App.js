import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {Provider} from 'react-redux';

import Home from './src/screens/Home';
import Auth from './src/screens/Auth';
import Cart from './src/screens/cart';
import Profile from './src/screens/profile';
import DrawerMenu from './src/components/DrawerContentMenu/DrawerMenu';
import store from './src/store';

const Drawer = createDrawerNavigator();

const App = () => {
  const route = false;
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          initialRouteName="Auth"
          screenOptions={{headerShown: false, swipeEnabled: route}}
          drawerContent={props => <DrawerMenu {...props} />}>
          <Drawer.Screen name="Auth" component={Auth} />
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Cart" component={Cart} />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
