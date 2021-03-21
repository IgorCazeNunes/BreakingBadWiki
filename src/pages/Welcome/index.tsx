import React from 'react';
import { Image } from 'react-native';

import logoImage from '../../assets/logo.png';
import backgroundImage from '../../assets/background.png';

import {
  Container,
  Title,
  Description,
  ButtonContainer,
  ButtonText,
  ButtonIcon,
} from './styles';

const Welcome: React.FC = () => (
  <Container source={backgroundImage} resizeMode="cover">
    <Image source={logoImage} />

    <Title>
      Seja {'\n'}
      Bem-Vindo
    </Title>

    <Description>
      Aqui você vai ficar por dentro de todos os personagens da serie americana
      breaking bad.
    </Description>

    <ButtonContainer
      onPress={() => {
        console.log('Proseguir...');
      }}
    >
      <ButtonText>Proseguir</ButtonText>

      <ButtonIcon name="arrow-right" />
    </ButtonContainer>
  </Container>
);

export default Welcome;
