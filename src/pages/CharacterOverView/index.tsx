import React, { useCallback, useEffect, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { Linking, View } from 'react-native';

import formatDate from '../../utils/formatDate';
import api from '../../services/api';
import { Character } from '../CharactersList';

import {
  Container,
  HeaderImage,
  CharacterInfo,
  CharacterInfoTitle,
  CharacterInfoSubTitle,
  CharacterInfoText,
  Loader,
  ReturnButton,
  ReturnButtonIcon,
  PortraytedStatusContainer,
  PortraytedContainer,
  SearchGoogleButton,
  SearchGoogleButtonText,
} from './styles';

interface CharacterData extends Character {
  occupation: string[];
  status: string;
  portrayed: string;
}

type ParamList = {
  CharacterOverView: {
    id: number;
  };
};

const CharacterOverView: React.FC = () => {
  const route = useRoute<RouteProp<ParamList, 'CharacterOverView'>>();
  const navigation = useNavigation();

  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState<CharacterData>(
    {} as CharacterData,
  );

  const { id } = route.params;

  useEffect(() => {
    async function loadCharacter(): Promise<void> {
      setIsLoading(true);

      const { data } = await api.get<CharacterData[]>(`/characters/${id}`);

      const formatedCharacter = data[0];
      formatedCharacter.birthday = formatDate(formatedCharacter.birthday);

      setCharacter(formatedCharacter);

      setIsLoading(false);
    }

    loadCharacter();
  }, [id]);

  const handleBack = useCallback(() => {
    navigation.navigate('CharactersList');
  }, [navigation]);

  const handleSearchGoogle = useCallback(async name => {
    Linking.openURL(`https://www.google.com/search?q=${name}`);
  }, []);

  return (
    <Container>
      {isLoading && <Loader size="large" color="#3d3d4d" />}

      <ReturnButton onPress={handleBack}>
        <ReturnButtonIcon name="arrow-left" />
      </ReturnButton>

      <HeaderImage source={{ uri: character.img }} />

      <CharacterInfo>
        <CharacterInfoTitle>{character.name}</CharacterInfoTitle>

        <View>
          <CharacterInfoSubTitle>Data de nascimento:</CharacterInfoSubTitle>
          <CharacterInfoText>{character.birthday}</CharacterInfoText>
        </View>

        <View>
          <CharacterInfoSubTitle>Ocupação:</CharacterInfoSubTitle>
          <CharacterInfoText>{character.occupation[0]}</CharacterInfoText>
        </View>

        <View>
          <CharacterInfoSubTitle>Apelido:</CharacterInfoSubTitle>
          <CharacterInfoText>{character.nickname}</CharacterInfoText>
        </View>

        <PortraytedStatusContainer>
          <PortraytedContainer>
            <CharacterInfoSubTitle>Ator:</CharacterInfoSubTitle>
            <CharacterInfoText>{character.portrayed}</CharacterInfoText>
          </PortraytedContainer>

          <View>
            <CharacterInfoSubTitle>Status:</CharacterInfoSubTitle>
            <CharacterInfoText>{character.status}</CharacterInfoText>
          </View>
        </PortraytedStatusContainer>
      </CharacterInfo>

      <SearchGoogleButton
        onPress={() => {
          handleSearchGoogle(character.name);
        }}
      >
        <SearchGoogleButtonText>Buscar no google</SearchGoogleButtonText>
      </SearchGoogleButton>
    </Container>
  );
};

export default CharacterOverView;
