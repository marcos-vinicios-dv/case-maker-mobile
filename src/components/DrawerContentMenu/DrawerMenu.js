import React from 'react';
import {Image, TouchableOpacity} from 'react-native';
import IconHome from 'react-native-vector-icons/MaterialIcons';
import IconCart from 'react-native-vector-icons/Ionicons';

import ProfileImage from '../../assets/images/profile.png';

import {
  Container,
  ButtonNavigation,
  TextButtonNavigation,
  ProfileContainer,
  EmailUser,
  NameUser,
} from './styles';

const DrawerMenu = props => {
  return (
    <Container {...props}>
      <ProfileContainer>
        <TouchableOpacity onPress={() => props.navigation.navigate('Profile')}>
          <Image source={ProfileImage} />
        </TouchableOpacity>
        <NameUser>Marcos Vinicios Teixeira</NameUser>
        <EmailUser>marquinpray@gmial.com</EmailUser>
      </ProfileContainer>
      <ButtonNavigation onPress={() => props.navigation.navigate('Home')}>
        <IconHome name="home" size={24} />
        <TextButtonNavigation>Home</TextButtonNavigation>
      </ButtonNavigation>
      <ButtonNavigation onPress={() => props.navigation.navigate('Cart')}>
        <IconCart name="cart" size={24} />
        <TextButtonNavigation>Carrinho</TextButtonNavigation>
      </ButtonNavigation>
    </Container>
  );
};

export default DrawerMenu;
