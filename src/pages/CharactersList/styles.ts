import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background: #c4c4c4;

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

  background: #333333;
`;

export const Title = styled.Text`
  color: #ffffff;
  font-size: 20px;
  font-family: 'Poppins-SemiBold';
`;

export const SubTitle = styled.Text`
  color: #ffffff;
  font-size: 14px;
  font-family: 'Poppins-Regular';
`;

export const Content = styled.View`
  flex: 1;

  margin: 0 20px;
`;
