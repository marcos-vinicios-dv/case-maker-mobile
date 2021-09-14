import React from 'react';
import {View} from 'react-native';
import {useForm} from 'react-hook-form';
import * as yup from 'yup';
import {yupResolver} from '@hookform/resolvers/yup';

import Input from '../input/input';
import {Container, Title, SubmitButton, TextButton} from './styles';

const editUserFormSchema = yup.object().shape({
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

const EditForm = ({editable = false}) => {
  const {control, handleSubmit, formState} = useForm({
    resolver: yupResolver(editUserFormSchema),
  });

  const {errors} = formState;

  const onSubmit = data => {
    console.log(data);
  };
  return (
    <Container>
      <Title>Editar</Title>

      <View>
        <Input
          name="name"
          control={control}
          placeholder="Nome"
          error={errors.name}
          editable={editable}
        />
        <Input
          name="email"
          control={control}
          placeholder="E-mail"
          error={errors.email}
          editable={editable}
        />
        <Input
          name="password"
          control={control}
          placeholder="Senha"
          secureTextEntry
          error={errors.password}
          editable={editable}
        />
        <Input
          name="password_confirmation"
          control={control}
          placeholder="Confirmar senha"
          secureTextEntry
          error={errors.password_confirmation}
          editable={editable}
        />
      </View>

      <SubmitButton onPress={handleSubmit(onSubmit)} editable={editable}>
        <TextButton editable={editable}>Alterar</TextButton>
      </SubmitButton>
    </Container>
  );
};

export default EditForm;
