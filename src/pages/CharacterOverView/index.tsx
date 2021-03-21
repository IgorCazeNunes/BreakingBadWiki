import React, { useCallback, useEffect, useState } from 'react';
import { View } from 'react-native';

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

const CharacterOverView: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [character, setCharacter] = useState<CharacterData>(
    {} as CharacterData,
  );

  useEffect(() => {
    // async function loadCharacter(): Promise<void> {
    //   setLoading(true);

    //   const { data } = await api.get<CharacterData>('/characters/2');

    //   setCharacter(data);

    //   setLoading(false);
    // }

    // loadCharacter();

    setCharacter({
      name: 'Walter White',
      birthday: '09-07-1958',
      occupation: ['High School Chemistry Teacher', 'Meth King Pin'],
      img:
        'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
      status: 'Deceased',
      nickname: 'Heisenberg',
      portrayed: 'Bryan Cranston',
    });
  }, []);

  const handleSearchGoogle = useCallback(() => {
    console.log('Google Search');
  }, []);

  return (
    <Container>
      {loading && <Loader size="large" color="#3d3d4d" />}

      <ReturnButton>
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

      <SearchGoogleButton onPress={handleSearchGoogle}>
        <SearchGoogleButtonText>Buscar no google</SearchGoogleButtonText>
      </SearchGoogleButton>
    </Container>
  );
};

export default CharacterOverView;
