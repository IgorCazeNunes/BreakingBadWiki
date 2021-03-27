import { useNavigation } from '@react-navigation/core';
import React, { useCallback } from 'react';
import { View } from 'react-native';

import formatDate from '../../utils/formatDate';

import { Character } from '../../pages/CharactersList';

import {
  Container,
  CardImage,
  CardInformation,
  CardTitle,
  CardSubTitle,
  CardText,
} from './styles';

interface CharacterCardProps {
  item: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ item }) => {
  const navigation = useNavigation();

  const handleNavigateToCharacterOverView = useCallback(
    (name: string) => {
      navigation.navigate('CharacterOverView', { name });
    },
    [navigation],
  );

  return (
    <Container>
      <CardImage source={{ uri: item.img }} resizeMode="cover" />

      <CardInformation
        onPress={() => {
          handleNavigateToCharacterOverView(item.name);
        }}
      >
        <CardTitle ellipsizeMode="tail" numberOfLines={1}>
          {item.name}
        </CardTitle>

        <View>
          <CardSubTitle>Conhecido como:</CardSubTitle>
          <CardText>{item.nickname}</CardText>
        </View>

        <View>
          <CardSubTitle>Data de nascimento:</CardSubTitle>
          <CardText>{item.birthday}</CardText>
        </View>
      </CardInformation>
    </Container>
  );
};

export default CharacterCard;
