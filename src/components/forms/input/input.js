import React, {useState} from 'react';
import {useController} from 'react-hook-form';

import {InputContainer, StyledInput, Error} from './styles';

const Input = ({control, name, error, ...rest}) => {
  const [focused, setFocused] = useState(false);
  const {field} = useController({
    control,
    name,
  });

  return (
    <InputContainer focus={focused}>
      <StyledInput
        placeholderTextColor="#3c4856"
        value={field.value}
        onChangeText={field.onChange}
        {...rest}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(false)}
      />
      {!!error && <Error>{error.message}</Error>}
    </InputContainer>
  );
};

export default Input;
