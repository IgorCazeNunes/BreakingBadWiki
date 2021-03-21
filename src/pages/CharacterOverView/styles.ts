import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;

  background: #c4c4c4;

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

  background: #f0f0f5;
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

export const CharacterInfoText = styled.Text`
  color: #3d3d4d;
  font-size: 16px;
  font-family: 'Poppins-SemiBold';
  line-height: 20px;
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

  background: #6d6d6d;
`;

export const SearchGoogleButtonText = styled.Text`
  margin-left: 16px;

  color: #e1e1e6;
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

  background: #6d6d6d;
  border-radius: 25px;
`;

export const ReturnButtonIcon = styled(Icon)`
  margin-left: 3px;

  color: #ffffff;
  font-size: 26px;
`;
