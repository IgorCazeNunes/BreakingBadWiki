import React, { forwardRef, useImperativeHandle, useRef } from 'react';
import { TextInputProps } from 'react-native';

import { Container, InputIcon, InputText, ErrorText } from './styles';

interface InputProps extends TextInputProps {
  icon: string;
  error: string | undefined;
  isTouched: boolean | undefined;
}

export interface InputRef {
  focus(): void;
}

const Input: React.ForwardRefRenderFunction<InputRef, InputProps> = (
  { icon, error, isTouched, ...rest },
  ref,
) => {
  const inputElementRef = useRef<any>(null);

  useImperativeHandle(ref, () => ({
    focus() {
      inputElementRef.current.focus();
    },
  }));

  return (
    <Container isTouched={isTouched} error={error}>
      <InputIcon name={icon} />

      <InputText
        ref={inputElementRef}
        placeholderTextColor="#959595"
        {...rest}
      />

      {error && isTouched && <ErrorText>{error}</ErrorText>}
    </Container>
  );
};

export default forwardRef(Input);
