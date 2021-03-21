import React, { useEffect, useMemo, useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import CharacterCard from '../../components/CharacterCard';
import api from '../../services/api';

import {
  Container,
  Header,
  Title,
  SubTitle,
  Content,
  InputContainer,
  InputIcon,
  InputText,
  Loader,
} from './styles';

export interface Character {
  char_id: number;
  name: string;
  birthday: string;
  img: string;
  nickname: string;
}

const CharactersList: React.FC = () => {
  const [characters, setCharacters] = useState<Character[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function loadCharacters(): Promise<void> {
      setLoading(true);

      const { data } = await api.get<Character[]>('/characters');

      setCharacters(data);

      setLoading(false);
    }

    loadCharacters();
  }, []);

  const totalCharacters = useMemo(() => {
    return characters.length;
  }, [characters]);

  return (
    <Container>
      <Header>
        <Title>Listagem</Title>

        <SubTitle>{totalCharacters} Personagens</SubTitle>
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

        {loading ? (
          <Loader size="large" color="#3d3d4d" />
        ) : (
          <FlatList
            data={characters}
            keyExtractor={item => item.char_id}
            renderItem={({ item }: { item: Character }) => {
              return <CharacterCard item={item} />;
            }}
          />
        )}
      </Content>
    </Container>
  );
};

export default CharactersList;
