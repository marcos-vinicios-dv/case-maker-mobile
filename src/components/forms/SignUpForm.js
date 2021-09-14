import React, {useState} from 'react';
import {View} from 'react-native';
import * as yup from 'yup';
import {useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';

import api from '../../services/api';
import Input from './input/input';
import {Container, Title, SubmitButton, TextButton} from './styles';

const createUserFormSchema = yup.object().shape({
  name: yup.string().required('Nome obrigatório'),
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup
    .string()
    .required('Senha obrigatória')
    .min(6, 'No mínimo 6 caracteres'),
  password_confirmation: yup
    .string()
    .oneOf([null, yup.ref('password')], 'As senhas precisam ser iguais'),
});

const SignUpForm = ({onSetSignUp}) => {
  const [isLoading, setIsLoading] = useState(false);
  const {control, handleSubmit, formState} = useForm({
    resolver: yupResolver(createUserFormSchema),
  });
  const {errors} = formState;

  const onSubmit = async ({email, name, password}) => {
    try {
      setIsLoading(true);

      await api.post('usuarios/registrar', {
        email,
        nome: name,
        password,
      });
      setIsLoading(false);
      onSetSignUp(false);
    } catch (e) {
      setIsLoading(false);
    }
  };

  return (
    <Container>
      <Title>Cadastrar</Title>

      <View>
        <Input
          name="name"
          control={control}
          placeholder="Nome"
          error={errors.name}
        />
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
        <Input
          name="password_confirmation"
          control={control}
          placeholder="Confirmar senha"
          secureTextEntry
          error={errors.password_confirmation}
        />
      </View>

      <SubmitButton onPress={handleSubmit(onSubmit)}>
        <TextButton>{isLoading ? 'Cadastrando...' : 'Cadastrar'}</TextButton>
      </SubmitButton>
    </Container>
  );
};

export default SignUpForm;
