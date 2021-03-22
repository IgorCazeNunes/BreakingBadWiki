import React from 'react';
import { TextInputProps } from 'react-native';

import { Container, InputIcon, InputText } from './styles';

interface InputProps extends TextInputProps {
  icon: string;
}

const Input: React.FC<InputProps> = ({ icon, ...rest }) => {
  return (
    <Container>
      <InputIcon name={icon} />

      <InputText placeholderTextColor="#959595" {...rest} />
    </Container>
  );
};

export default Input;
