/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import CardProduct from '../../components/CardProduct';
import Header from '../../components/Header';

import {
  CheckoutContainer,
  SubText,
  TotalPrice,
  CheckoutButton,
  TextButton,
} from './styles';
import {PageTitle, Container} from '../../styles/commonStyles';
import {Text, View} from 'react-native';

const Cart = props => {
  return (
    <>
      <Header {...props} />
      <Container>
        <PageTitle>Cart</PageTitle>
        <CardProduct isProductInCart />
        <CheckoutContainer>
          <View style={{flexDirection: 'row'}}>
            <SubText>Total</SubText>
            <TotalPrice>
              R$ <Text style={{fontSize: 24}}>450</Text>,00
            </TotalPrice>
          </View>
          <CheckoutButton>
            <TextButton>Finalizar Pedido</TextButton>
          </CheckoutButton>
        </CheckoutContainer>
      </Container>
    </>
  );
};

export default Cart;
