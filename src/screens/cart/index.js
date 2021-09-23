import React, { useEffect } from 'react';
import { FlatList, Text, View } from 'react-native';
import { useSelector } from 'react-redux';
import Toast from 'react-native-toast-message';
import AsyncStorage from '@react-native-async-storage/async-storage';

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
import { PageTitle, Container } from '../../styles/commonStyles';

const Cart = (props) => {
  const cart = useSelector((state) => state.cart.items);

  const totalPrice = cart.reduce((total, item) => {
    return total + item.product.preco * item.quantity;
  }, 0);

  const totalPriceFormatted = totalPrice.toFixed(2).split('.');

  useEffect(() => {
    async function verifyMessage() {
      const messageAlreadyDisplayed = await AsyncStorage.getItem(
        '@caseMaker:messageCart'
      );

      if (!JSON.parse(messageAlreadyDisplayed)?.displayedMessage) {
        console.log('mensagem exibida');
        Toast.show({
          type: 'my_custom_Success',
          text1: 'Excluir produto',
          text2: 'Para excluir um produto o deslizar para esquerda!',
          visibilityTime: 4000,
        });

        AsyncStorage.setItem(
          '@caseMaker:messageCart',
          JSON.stringify({
            displayedMessage: true,
          })
        );
      }
    }
    verifyMessage();
  }, []);

  return (
    <>
      <Header {...props} />
      <Container>
        <PageTitle>Cart</PageTitle>
        {cart.length > 0 ? (
          <FlatList
            data={cart}
            keyExtractor={(item) => item.product._id}
            showsVerticalScrollIndicator={false}
            renderItem={({ item }) => (
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
          <View style={{ flexDirection: 'row' }}>
            <SubText>Total</SubText>
            <TotalPrice>
              R$ <Text style={{ fontSize: 24 }}>{totalPriceFormatted[0]}</Text>,
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
