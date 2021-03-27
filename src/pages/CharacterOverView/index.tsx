import React, { useCallback, useEffect, useState } from 'react';
import { Linking, View } from 'react-native';
import { RouteProp, useNavigation, useRoute } from '@react-navigation/native';

import { useCharacterList } from '../../hooks/characterList';

import formatDate from '../../utils/formatDate';
import api from '../../services/api';
import { Character } from '../CharactersList';

import emptyCharacterImage from '../../assets/emptyCharacter.png';

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
  status: 'Presumed dead' | 'Alive' | 'Deceased' | 'Unknown';
  formatedStatus: 'Vivo' | 'Morto' | 'Desconhecido';
  portrayed: string;
}

type ParamList = {
  CharacterOverView: {
    name: string;
  };
};

const CharacterOverView: React.FC = () => {
  const route = useRoute<RouteProp<ParamList, 'CharacterOverView'>>();
  const navigation = useNavigation();

  const { searchExactCharacter } = useCharacterList();

  const [isApi, setIsApi] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [character, setCharacter] = useState<CharacterData>(
    {} as CharacterData,
  );

  const { name } = route.params;

  useEffect(() => {
    async function loadCharacter(): Promise<void> {
      setIsLoading(true);

      let loadedCharacter = searchExactCharacter(name);

      if (!loadedCharacter) {
        const { data } = await api.get<CharacterData[]>(
          `/characters?name=${name}`,
        );

        // eslint-disable-next-line prefer-destructuring
        loadedCharacter = data[0];

        setIsApi(true);
      }

      let formatedOccupation = ['Desconhecido'];

      if (loadedCharacter.occupation[0]) {
        formatedOccupation = [loadedCharacter.occupation[0]];
      }

      let formatedStatus: 'Vivo' | 'Morto' | 'Desconhecido' = 'Desconhecido';

      if (loadedCharacter.status === 'Alive') {
        formatedStatus = 'Vivo';
      } else if (loadedCharacter.status === 'Deceased') {
        formatedStatus = 'Morto';
      }

      let formatedBirthday = loadedCharacter.birthday;

      if (isApi) {
        formatedBirthday = formatDate(loadedCharacter.birthday);
      }

      setCharacter({
        ...loadedCharacter,
        formatedStatus,
        occupation: formatedOccupation,
        birthday: formatedBirthday,
      });

      setIsLoading(false);
    }

    loadCharacter();
  }, [name, searchExactCharacter, isApi]);

  const handleBack = useCallback(() => {
    navigation.navigate('CharactersList');
  }, [navigation]);

  const handleSearchGoogle = useCallback(async searchName => {
    Linking.openURL(`https://www.google.com/search?q=${searchName}`);
  }, []);

  return (
    <Container>
      {isLoading && <Loader size="large" color="#3d3d4d" />}

      <ReturnButton onPress={handleBack}>
        <ReturnButtonIcon name="arrow-left" />
      </ReturnButton>

      {character.img ? (
        <HeaderImage source={{ uri: character.img }} />
      ) : (
        <HeaderImage source={emptyCharacterImage} />
      )}

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
            <CharacterInfoText status={character.formatedStatus}>
              {character.formatedStatus}
            </CharacterInfoText>
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
