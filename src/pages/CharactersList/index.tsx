import React from 'react';
import { Text } from 'react-native';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  InputContainer,
  InputIcon,
  InputText,
} from './styles';

const CharactersList: React.FC = () => (
  <Container>
    <Header>
      <Title>Listagem</Title>
      <SubTitle>62 Personagens</SubTitle>
    </Header>

    <Content>
      <InputContainer>
        <InputIcon name="search" />

        <InputText
          keyboardAppearance="dark"
          placeholderTextColor="#959595"
          autoCorrect={false}
          autoCapitalize="none"
          placeholder="Busque por um personagem"
          returnKeyType="send"
        />
      </InputContainer>

      <Text>Characters List</Text>
    </Content>
  </Container>
);

export default CharactersList;
