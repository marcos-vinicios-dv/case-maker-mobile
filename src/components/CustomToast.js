import React from 'react';
import {ErrorToast, SuccessToast} from 'react-native-toast-message';

export const toastConfig = {
  success_custom: props => (
    <SuccessToast
      {...props}
      text1Style={{
        fontSize: 18,
      }}
      text2Style={{
        fontSize: 16,
      }}
    />
  ),

  error_custom: props => (
    <ErrorToast
      {...props}
      text1Style={{
        fontSize: 18,
      }}
      text2Style={{
        fontSize: 16,
      }}
    />
  ),
};
