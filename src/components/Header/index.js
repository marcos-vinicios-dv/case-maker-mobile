/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import IconMenu from 'react-native-vector-icons/AntDesign';
import IconCart from 'react-native-vector-icons/Ionicons';
import {useSelector} from 'react-redux';

import {Container, QuantityItemsInCart} from './styles';

const Header = ({navigation}) => {
  const cart = useSelector(state => state.cart.items);

  return (
    <Container>
      <TouchableOpacity onPress={() => navigation.openDrawer()}>
        <IconMenu name="menu-fold" size={24} color="#00d172" />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
        {cart.length > 0 && (
          <QuantityItemsInCart>
            <Text style={{fontSize: 10, color: '#f2f2f2'}}>{cart.length}</Text>
          </QuantityItemsInCart>
        )}
        <IconCart name="cart" size={27} color="#00d172" />
      </TouchableOpacity>
    </Container>
  );
};

export default Header;
