import React from 'react';
import {useForm} from 'react-hook-form';
import {View} from 'react-native';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import Input from './input/input';
import {Container, Title, SubmitButton, TextButton} from './styles';

const sigInFormSchema = yup.object().shape({
  email: yup.string().required('E-mail obrigatório').email('E-mail inválido'),
  password: yup.string().required('Senha obrigatória'),
});

const SignInForm = () => {
  const {control, handleSubmit, formState} = useForm({
    resolver: yupResolver(sigInFormSchema),
  });

  const {errors} = formState;

  const onSubmit = data => {
    console.log(data);
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
        <TextButton>Login</TextButton>
      </SubmitButton>
    </Container>
  );
};

export default SignInForm;
