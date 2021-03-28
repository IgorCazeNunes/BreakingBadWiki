import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;

  background: #d2d6da;

  width: 100%;
  height: 100%;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 125px;

  padding: 0 20px;

  background: #0b5b4c;
`;

export const Title = styled.Text`
  color: #fcf8f5;
  font-size: 20px;
  font-family: 'Poppins-SemiBold';
`;

export const SubTitle = styled.Text`
  color: #fcf8f5;
  font-size: 14px;
  font-family: 'Poppins-Regular';
`;

export const Content = styled.View`
  flex: 1;

  margin: 0 20px;
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;

  position: relative;
  top: -30px;

  height: 60px;

  padding: 0 15px;
  margin-bottom: -30px;

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

export const Loader = styled.ActivityIndicator`
  margin: 15px 0;
`;

export const FloatButton = styled.TouchableOpacity`
  align-items: center;
  justify-content: center;

  position: absolute;
  z-index: 999;
  bottom: 15px;
  right: 15px;

  height: 50px;
  width: 50px;

  background: #40a07b;
  border-radius: 25px;
`;

export const FloatButtonIcon = styled(Icon)`
  margin-left: 3px;

  color: #fcf8f5;
  font-size: 26px;
`;
