/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import Header from '../../components/Header';
import {
  NameUser,
  EmailUser,
  ContainerButtons,
  Button,
  ButtonText,
  Image,
  Container,
} from './styles';
import ProfileImage from '../../assets/images/profile.png';
import EditForm from '../../components/forms/EditForm';
import {logout} from '../../store/modules/user/actions';

const Profile = props => {
  const [isEditable, setIsEditable] = useState(false);
  const user = useSelector(state => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function handleLogout() {
    dispatch(logout());
    navigation.navigate('Auth');
  }

  return (
    <>
      <Header {...props} />
      <Container>
        <View style={{alignItems: 'center'}}>
          <Image source={ProfileImage} />

          <NameUser>{user.nome}</NameUser>
          <EmailUser>{user.email}</EmailUser>

          <ContainerButtons>
            <Button
              active={isEditable}
              onPress={() => setIsEditable(!isEditable)}>
              <ButtonText active={isEditable}>
                {isEditable ? 'Cancelar' : 'Editar'}
              </ButtonText>
            </Button>
            <Button active={!isEditable} onPress={handleLogout}>
              <ButtonText active={!isEditable}>Sair</ButtonText>
            </Button>
          </ContainerButtons>

          <EditForm editable={isEditable} onSetEditable={setIsEditable} />
        </View>
      </Container>
    </>
  );
};

export default Profile;
