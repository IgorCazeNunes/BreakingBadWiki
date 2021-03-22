import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  position: relative;

  height: 60px;

  padding: 0 15px;
  margin-bottom: 15px;

  background: #ffffff;
  border-radius: 6px;
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
