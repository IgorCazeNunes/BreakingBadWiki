import styled, { css } from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

interface CharacterInfoTextProps {
  status?: 'Vivo' | 'Morto' | 'Desconhecido';
}

const handleStatusType = {
  Vivo: '#4ac82a',
  Morto: '#e91337',
  Desconhecido: '#ff9000',
};

export const Container = styled.View`
  flex: 1;

  width: 100%;
  height: 100%;
`;

export const HeaderImage = styled.Image`
  width: 100%;
  height: 500px;
`;

export const CharacterInfo = styled.View`
  flex: 1;
  justify-content: space-between;

  margin-top: -100px;
  margin-bottom: 56px;
  padding: 15px 25px;

  background: #fcf8f5;
`;

export const CharacterInfoTitle = styled.Text`
  align-self: center;
  color: #333333;
  font-size: 24px;
  font-family: 'Poppins-SemiBold';
  line-height: 28px;
`;

export const CharacterInfoSubTitle = styled.Text`
  color: #3d3d4d;
  font-size: 16px;
  font-family: 'Poppins-Medium';
  line-height: 20px;
`;

export const CharacterInfoText = styled.Text<CharacterInfoTextProps>`
  color: #3d3d4d;
  font-size: 16px;
  font-family: 'Poppins-SemiBold';
  line-height: 20px;

  ${props =>
    props.status &&
    css`
      color: ${handleStatusType[props.status]};
    `}
`;

export const PortraytedStatusContainer = styled.View`
  flex-direction: row;
`;

export const PortraytedContainer = styled.View`
  margin-right: 63px;
`;

export const SearchGoogleButton = styled.TouchableOpacity`
  position: absolute;
  left: 0;
  bottom: 0;
  right: 0;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  padding: 10px 0;

  height: 56px;

  background: #4c8bf5;
`;

export const SearchGoogleButtonText = styled.Text`
  margin-left: 16px;

  color: #fcf8f5;
  font-size: 20px;
  font-family: 'Poppins-Medium';
  line-height: 33px;
`;

export const Loader = styled.ActivityIndicator`
  position: absolute;
  z-index: 999;
  top: 25px;
  left: 50%;
`;

export const ReturnButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 999;
  top: 15px;
  left: 15px;

  height: 50px;
  width: 50px;

  background: #fcf8f5;
  border-radius: 25px;
`;

export const ReturnButtonIcon = styled(Icon)`
  margin-left: 3px;

  color: #333333;
  font-size: 26px;
`;
