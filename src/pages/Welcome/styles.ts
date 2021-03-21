import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.ImageBackground`
  flex: 1;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  padding: 0 30px;
`;

export const Title = styled.Text`
  margin-top: 60px;

  color: #ffffff;
  text-align: center;
  font-size: 40px;
  font-family: 'Poppins-SemiBold';
`;

export const Description = styled.Text`
  color: #ffffff;
  text-align: center;
  font-size: 15px;
  font-family: 'Poppins-SemiBold';
`;

export const ButtonContainer = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 60px;

  margin: 150px 0 35px;

  background: #6d6d6d;
  border-radius: 6px;
`;

export const ButtonText = styled.Text`
  margin-right: 10px;

  color: #e1e1e6;
  font-size: 15px;
  font-family: 'Poppins-Medium';
`;

export const ButtonIcon = styled(Icon)`
  color: #e1e1e6;
  font-size: 20px;
`;
