/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigation } from '@react-navigation/native';
import MaterialIcon from 'react-native-vector-icons/MaterialIcons';
import { launchImageLibrary } from 'react-native-image-picker';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Toast from 'react-native-toast-message';

import { updateUser } from '../../store/modules/user/actions';
import Header from '../../components/Header';
import {
  NameUser,
  EmailUser,
  ContainerButtons,
  Button,
  ButtonText,
  Image,
  Container,
  ButtonSelectImage,
  ButtonSelectImageText,
} from './styles';

import EditForm from '../../components/forms/EditForm';
import { logout } from '../../store/modules/user/actions';
import api from '../../services/api';

const Profile = (props) => {
  const [isEditable, setIsEditable] = useState(false);
  const [selectedFile, setSelectedFile] = useState(null);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigation = useNavigation();

  function handleLogout() {
    dispatch(logout());
    navigation.navigate('Auth');
  }

  const mostrarResposta = async (file) => {
    if (file.error) {
      Toast.show({
        type: 'my_custom_Error',
        text1: 'Erro ao carregar a imagem!',
        visibilityTime: 1000,
      });
      return;
    }

    if (!file.uri) {
      const { data } = await api.put(
        'usuarios/imagem-usuario',
        {
          base64Image: file.assets[0].base64,
          fileName: file.assets[0].fileName,
        },
        {
          headers: {
            Authorization: `CaseMaker ${user.token}`,
          },
        }
      );

      data.usuario.token = user.token;

      dispatch(updateUser(data.usuario));

      setSelectedFile(file.assets[0]);

      const serialUser = JSON.stringify({
        email: data.usuario.email,
        nome: data.usuario.nome,
        token: data.usuario.token,
        _id: data.usuario._id,
        imageUrl: data.usuario.imageUrl,
      });

      AsyncStorage.setItem('@caseMaker:user', serialUser);

      return;
    }
  };

  return (
    <>
      <Header {...props} />
      <Container>
        <View style={{ alignItems: 'center' }}>
          <ButtonSelectImage
            onPress={() =>
              launchImageLibrary(
                { mediaType: 'photo', includeBase64: true },
                mostrarResposta
              )
            }
            disabled={!isEditable}
          >
            {isEditable && (
              <>
                <MaterialIcon name="add-a-photo" size={24} color="#d1d1d1" />
                <ButtonSelectImageText>Escolher Foto</ButtonSelectImageText>
              </>
            )}
          </ButtonSelectImage>
          <Image source={{ uri: user.imageUrl }} />

          <NameUser>{user.nome}</NameUser>
          <EmailUser>{user.email}</EmailUser>

          <ContainerButtons>
            <Button
              active={isEditable}
              onPress={() => setIsEditable(!isEditable)}
            >
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
