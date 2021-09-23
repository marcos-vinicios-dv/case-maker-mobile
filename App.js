import 'react-native-gesture-handler';
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { Provider } from 'react-redux';
import Toast from 'react-native-toast-message';

import Home from './src/screens/Home';
import Auth from './src/screens/Auth';
import Cart from './src/screens/cart';
import Profile from './src/screens/profile';
import DrawerMenu from './src/components/DrawerContentMenu/DrawerMenu';
import store from './src/store';
import { toastConfig } from './src/components/ToastCustom/CustomToast';
import Product from './src/screens/Product';

const Drawer = createDrawerNavigator();

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{ headerShown: false, swipeEnabled: false }}
          backBehavior="history"
          drawerContent={(props) => <DrawerMenu {...props} />}
        >
          <Drawer.Screen name="Auth" component={Auth} />
          <Drawer.Screen name="Home" component={Home} />
          <Drawer.Screen name="Cart" component={Cart} />
          <Drawer.Screen name="Profile" component={Profile} />
          <Drawer.Screen name="Product" component={Product} />
        </Drawer.Navigator>
        <Toast config={toastConfig} ref={(ref) => Toast.setRef(ref)} />
      </NavigationContainer>
    </Provider>
  );
};

export default App;
