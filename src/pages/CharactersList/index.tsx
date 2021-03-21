import React from 'react';
import { Text } from 'react-native';

import { Container, Header, Title, SubTitle, Content } from './styles';

const CharactersList: React.FC = () => (
  <Container>
    <Header>
      <Title>Listagem</Title>
      <SubTitle>62 Personagens</SubTitle>
    </Header>

    <Content>
      <Text>Characters List</Text>
    </Content>
  </Container>
);

export default CharactersList;
