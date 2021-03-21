import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;

  height: 150px;
  margin: 15px 0 0;

  background: #f0f0f5;
  border-radius: 6px;
`;

export const CardImage = styled.Image`
  width: 140px;
  height: 150px;

  border-top-left-radius: 6px;
  border-bottom-left-radius: 6px;
`;

export const CardInformation = styled.TouchableOpacity`
  flex: 1;
  flex-direction: column;
  justify-content: space-between;

  padding: 10px;
`;

export const CardTitle = styled.Text`
  color: #3d3d4d;
  font-size: 20px;
  font-family: 'Poppins-SemiBold';
`;

export const CardNicknameTitle = styled.Text`
  color: #3d3d4d;
  font-size: 14px;
  font-family: 'Poppins-Medium';

  line-height: 20px;
`;

export const CardNicknameText = styled.Text`
  color: #3d3d4d;
  font-size: 16px;
  font-family: 'Poppins-Medium';

  line-height: 20px;
`;

export const CardBirthdayTitle = styled.Text`
  color: #3d3d4d;
  font-size: 14px;
  font-family: 'Poppins-Medium';

  line-height: 20px;
`;

export const CardBirthdayText = styled.Text`
  color: #3d3d4d;
  font-size: 16px;
  font-family: 'Poppins-Medium';

  line-height: 18px;
`;
