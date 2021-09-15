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
  TextEmptyCart,
} from './styles';
import {PageTitle, Container} from '../../styles/commonStyles';
import {FlatList, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const Cart = props => {
  const cart = useSelector(state => state.cart.items);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.product.preco * item.quantity;
  }, 0);

  const totalPriceFormatted = totalPrice.toFixed(2).split('.');

  return (
    <>
      <Header {...props} />
      <Container>
        <PageTitle>Cart</PageTitle>
        {cart.length > 0 ? (
          <FlatList
            data={cart}
            keyExtractor={item => item.product._id}
            showsVerticalScrollIndicator={false}
            renderItem={({item}) => (
              <CardProduct
                isProductInCart
                product={item.product}
                quantity={item.quantity}
              />
            )}
          />
        ) : (
          <TextEmptyCart>Seu Carrinho está vazio</TextEmptyCart>
        )}
        <CheckoutContainer>
          <View style={{flexDirection: 'row'}}>
            <SubText>Total</SubText>
            <TotalPrice>
              R$ <Text style={{fontSize: 24}}>{totalPriceFormatted[0]}</Text>,
              {totalPriceFormatted[1]}
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
