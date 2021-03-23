import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, InputIcon, InputText, ErrorText } from './styles';

interface InputProps extends TextInputProps {
  icon: string;
  error: string | undefined;
  isTouched: boolean | undefined;
}

const Input: React.FC<InputProps> = ({ icon, error, isTouched, ...rest }) => {
  return (
    <Container isTouched={isTouched} error={error}>
      <InputIcon name={icon} />

      <InputText placeholderTextColor="#959595" {...rest} />
      {error && isTouched && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default Input;
