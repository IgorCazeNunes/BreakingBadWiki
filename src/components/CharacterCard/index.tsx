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
  CardNicknameTitle,
  CardNicknameText,
  CardBirthdayTitle,
  CardBirthdayText,
} from './styles';

interface CharacterCardProps {
  item: Character;
}

const CharacterCard: React.FC<CharacterCardProps> = ({ item }) => {
  const navigation = useNavigation();

  const handleNavigateToCharacterOverView = useCallback(
    (id: number) => {
      navigation.navigate('CharacterOverView', { id });
    },
    [navigation],
  );

  return (
    <Container>
      <CardImage source={{ uri: item.img }} resizeMode="cover" />

      <CardInformation
        onPress={() => {
          handleNavigateToCharacterOverView(item.char_id);
        }}
      >
        <CardTitle>{item.name}</CardTitle>

        <View>
          <CardNicknameTitle>Conhecido como:</CardNicknameTitle>
          <CardNicknameText>{item.nickname}</CardNicknameText>
        </View>

        <View>
          <CardBirthdayTitle>Data de nascimento:</CardBirthdayTitle>
          <CardBirthdayText>{formatDate(item.birthday)}</CardBirthdayText>
        </View>
      </CardInformation>
    </Container>
  );
};

export default CharacterCard;
