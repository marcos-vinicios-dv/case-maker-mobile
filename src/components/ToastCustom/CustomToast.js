import React from 'react';

import {
  ContainerSuccess,
  ContainerError,
  ToastText1,
  ToastText2,
} from './styles';

export const toastConfig = {
  my_custom_Success: ({text1, text2, props, ...rest}) => (
    <ContainerSuccess>
      <ToastText1>{text1}</ToastText1>
      <ToastText2>{text2}</ToastText2>
    </ContainerSuccess>
  ),

  my_custom_Error: ({text1, props, ...rest}) => (
    <ContainerError>
      <ToastText1>{text1}</ToastText1>
    </ContainerError>
  ),
};
