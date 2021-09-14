import React, {useState} from 'react';
import {View} from 'react-native';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';
import {useDispatch} from 'react-redux';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useNavigation} from '@react-navigation/native';

import api from '../../services/api';
import Input from './input/input';
import {Container, Title, SubmitButton, TextButton} from './styles';
import {signInUser} from '../../store/modules/user/actions';

const sigInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

const SignInForm = () => {
  const [isLoading, setIsLoading] = useState(false);
  const {control, handleSubmit, formState} = useForm({
    resolver: yupResolver(sigInFormSchema),
  });

  const {errors} = formState;
  const dispatch = useDispatch();
  const navigation = useNavigation();

  const onSubmit = async ({email, password}) => {
    try {
      setIsLoading(true);

      const response = await api.post('usuarios/login', {
        email,
        password,
      });
      const {usuario} = await response.data;

      dispatch(signInUser(usuario));

      const serialUser = JSON.stringify({
        email: usuario.email,
        nome: usuario.nome,
        token: usuario.token,
      });
      setIsLoading(false);

      AsyncStorage.setItem('@caseMaker:user', serialUser);
      navigation.navigate('Home');
    } catch (e) {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Title>Login</Title>

      <View>
        <Input
          name="email"
          control={control}
          placeholder="E-mail"
          error={errors.email}
        />
        <Input
          name="password"
          control={control}
          placeholder="Senha"
          secureTextEntry
          error={errors.password}
        />
      </View>

      <SubmitButton onPress={handleSubmit(onSubmit)}>
        <TextButton>{isLoading ? 'Logando...' : 'Login'}</TextButton>
      </SubmitButton>
    </Container>
  );
};

export default SignInForm;
