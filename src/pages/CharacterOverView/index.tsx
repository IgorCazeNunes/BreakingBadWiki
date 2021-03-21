import React, { useCallback, useEffect, useState } from 'react';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { Linking, View } from 'react-native';
import api from '../../services/api';

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

export interface CharacterData {
  name: string;
  birthday: string;
  occupation: string[];
  img: string;
  status: string;
  nickname: string;
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

  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState<CharacterData>(
    {} as CharacterData,
  );

  const { id } = route.params;

  useEffect(() => {
    async function loadCharacter(): Promise<void> {
      setLoading(true);

      const { data } = await api.get<CharacterData[]>(`/characters/${id}`);

      setCharacter(data[0]);

      setLoading(false);
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
      {loading && <Loader size="large" color="#3d3d4d" />}

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
          <CharacterInfoText>{character.occupation}</CharacterInfoText>
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
