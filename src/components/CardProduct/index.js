/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, TouchableOpacity} from 'react-native';
import IconPlus from 'react-native-vector-icons/AntDesign';
import IconTrash from 'react-native-vector-icons/Ionicons';
import {useDispatch} from 'react-redux';
import Swipeable from 'react-native-gesture-handler/Swipeable';
import Toast from 'react-native-toast-message';

import {
  addProductToCartRequest,
  removeProductFromCart,
  updateProductQuantityRequest,
} from '../../store/modules/cart/actions';

import {
  CardContainer,
  Info,
  ButtonAddToCart,
  ProductTitle,
  SubTitle,
  ProductPrice,
  ProductImage,
  QuantityDisplay,
  LabelDisplay,
  SwipeableRightContainer,
  TextSwipeable,
} from './styles';

const CardProduct = ({isProductInCart = false, product, quantity = 1}) => {
  const dispatch = useDispatch();

  const addProductToCart = () => {
    Toast.show({
      type: 'my_custom_Success',
      text1: 'Produto adicionado',
      text2: `Gabinete ${product.titulo}`,
      visibilityTime: 1000,
    });
    dispatch(addProductToCartRequest(product));
  };

  const increment = () => {
    dispatch(updateProductQuantityRequest(product._id, quantity + 1));
  };

  const decrement = () => {
    dispatch(updateProductQuantityRequest(product._id, quantity - 1));
  };

  const removeProduct = () => {
    dispatch(removeProductFromCart(product._id));
  };

  const getRightContent = () => {
    return (
      <SwipeableRightContainer>
        <TextSwipeable>Excluir</TextSwipeable>
        <IconTrash name="trash-sharp" size={20} color="#FFF" />
      </SwipeableRightContainer>
    );
  };

  const contentCard = () => {
    return (
      <>
        <ProductImage source={{uri: product?.Imagem_URL}} />
        <Info>
          <ProductTitle>{product?.titulo}</ProductTitle>
          <SubTitle>
            {product?.disponibilidade ? 'Em estoque' : 'Fora de estoque'}
          </SubTitle>
          <ProductPrice>
            {isProductInCart ? (
              <>
                R$ <Text style={{fontSize: 20}}>{subTotal[0]}</Text>,
                {subTotal[1]}
              </>
            ) : (
              <>
                R${' '}
                <Text style={{fontSize: 20}}>
                  {product?.preco_formatado[0]}
                </Text>
                ,{product?.preco_formatado[1]}
              </>
            )}
          </ProductPrice>
        </Info>

        {isProductInCart ? (
          <QuantityDisplay>
            <TouchableOpacity onPress={decrement}>
              <IconPlus name="minus" size={16} color="#00d172" />
            </TouchableOpacity>
            <LabelDisplay>{quantity}</LabelDisplay>
            <TouchableOpacity onPress={increment}>
              <IconPlus name="plus" size={16} color="#00d172" />
            </TouchableOpacity>
          </QuantityDisplay>
        ) : (
          <ButtonAddToCart onPress={addProductToCart}>
            <IconPlus name="plus" size={16} color="#00d172" />
          </ButtonAddToCart>
        )}
      </>
    );
  };

  const subTotal = (product.preco * quantity).toFixed(2).split('.');

  if (isProductInCart) {
    return (
      <Swipeable
        renderRightActions={getRightContent}
        onSwipeableRightOpen={removeProduct}>
        <CardContainer>{contentCard()}</CardContainer>
      </Swipeable>
    );
  }

  return <CardContainer>{contentCard()}</CardContainer>;
};

export default CardProduct;
