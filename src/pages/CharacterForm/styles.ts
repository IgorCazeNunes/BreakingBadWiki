import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.ScrollView`
  flex: 1;

  background: #c4c4c4;

  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  flex-direction: column;
  align-items: center;

  width: 100%;
  height: 200px;

  padding: 25px;
  margin-bottom: 90px;

  background: #333333;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: center;

  width: 100%;

  padding: 25px;

  background: #333333;
`;

export const ReturnButton = styled.TouchableOpacity`
  justify-content: center;

  position: absolute;
  top: 25px;
  left: 0;

  height: 30px;
  width: 30px;

  margin-top: 3px;
`;

export const ReturnButtonIcon = styled(Icon)`
  margin-left: 3px;

  color: #ffffff;
  font-size: 26px;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 25px;
  line-height: 37.5px;
  font-family: 'Poppins-SemiBold';
`;

export const Content = styled.View`
  flex: 1;
  align-items: center;

  margin: 0 20px;
  padding-bottom: 76px;
`;

export const ContentTitle = styled.Text`
  margin: 20px 0;

  color: #333333;
  font-size: 18px;
  line-height: 27px;
  font-family: 'Poppins-SemiBold';
`;

export const CharacterImage = styled.Image`
  width: 180px;
  height: 180px;
  border-radius: 90px;
`;

export const CharacterImageContainer = styled.View`
  width: 180px;
  height: 180px;
`;

export const CharacterImageIcon = styled(Icon)`
  color: #ffffff;
  font-size: 26px;
`;

export const CharacterImageIconContainer = styled.View`
  align-items: center;
  justify-content: center;

  position: absolute;
  bottom: 5px;
  right: 5px;

  width: 48px;
  height: 48px;

  background: #6d6d6d;
  border-radius: 24px;
`;

export const StatusPickerContainer = styled.View`
  width: 100%;

  height: 60px;

  padding: 0 15px;
  margin-bottom: 15px;

  background: #ffffff;
  border-radius: 6px;
`;

export const SaveButton = styled.TouchableOpacity`
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

export const SaveButtonText = styled.Text`
  margin-left: 16px;

  color: #e1e1e6;
  font-size: 20px;
  font-family: 'Poppins-Medium';
  line-height: 33px;
`;