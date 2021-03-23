import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

interface ContainerProps {
  isTouched: boolean | undefined;
  error: string | undefined;
}

export const Container = styled.View<ContainerProps>`
  flex-direction: row;
  align-items: center;

  position: relative;

  height: 60px;

  padding: 0 15px;
  margin-bottom: 15px;

  background: #ffffff;
  border-radius: 6px;
  border-width: 2px;
  border-color: #ffffff;

  ${props =>
    props.isTouched &&
    props.error &&
    css`
      border-color: #ff2323;
    `}
`;

export const InputText = styled.TextInput`
  flex: 1;

  color: #222222;
  font-size: 16px;
  font-family: 'RobotoSlab-Regular';
`;

export const InputIcon = styled(Icon)`
  margin-right: 16px;

  color: #333333;
  font-size: 20px;
`;

export const ErrorText = styled.Text`
  margin-left: 16px;

  color: #ff2323;
  font-size: 16px;
  font-family: 'Poppins-Regular';
`;
