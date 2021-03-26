import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { FlatList, TouchableOpacity } from 'react-native-gesture-handler';
import { Formik } from 'formik';

import { useNavigation } from '@react-navigation/core';
import api from '../../services/api';

import CharacterCard from '../../components/CharacterCard';

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
  FloatButton,
  FloatButtonIcon,
} from './styles';
import { useCharacterList } from '../../hooks/characterList';

export interface Character {
  name: string;
  birthday: string;
  img: string;
  nickname: string;
}

const CharactersList: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [characters, setCharacters] = useState<Character[]>([]);

  const { characterList, addCharacter } = useCharacterList();

  const navigation = useNavigation();

  useEffect(() => {
    async function loadCharacters(): Promise<void> {
      setLoading(true);

      const { data } = await api.get<Character[]>('/characters');

      setCharacters([...characterList, ...data]);

      setLoading(false);
    }

    loadCharacters();
  }, [characterList]);

  const handleSearch = useCallback(async values => {
    setLoading(true);

    setCharacters([]);

    const { data } = await api.get<Character[]>(
      `/characters?name=${values.name}`,
    );

    setCharacters(data);

    setLoading(false);
  }, []);

  const handleNavigateToNewCharacter = useCallback(() => {
    navigation.navigate('CharacterForm');
  }, [navigation]);

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
        <Formik initialValues={{ name: '' }} onSubmit={handleSearch}>
          {({ handleChange, handleBlur, handleSubmit, values }) => (
            <InputContainer>
              <TouchableOpacity onPress={handleSubmit}>
                <InputIcon name="search" />
              </TouchableOpacity>

              <InputText
                keyboardAppearance="dark"
                placeholderTextColor="#959595"
                autoCorrect={false}
                autoCapitalize="none"
                placeholder="Busque por um personagem"
                returnKeyType="send"
                onSubmitEditing={handleSubmit}
                onChangeText={handleChange('name')}
                onBlur={handleBlur('name')}
                value={values.name}
              />
            </InputContainer>
          )}
        </Formik>

        {loading ? (
          <Loader size="large" color="#3d3d4d" />
        ) : (
          <FlatList
            data={characters}
            keyExtractor={item => item.name}
            renderItem={({ item }: { item: Character }) => {
              return <CharacterCard item={item} />;
            }}
          />
        )}
      </Content>

      <FloatButton onPress={handleNavigateToNewCharacter}>
        <FloatButtonIcon name="user-plus" />
      </FloatButton>
    </Container>
  );
};

export default CharactersList;
