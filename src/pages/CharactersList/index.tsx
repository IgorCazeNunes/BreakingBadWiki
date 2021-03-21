import React, { useState } from 'react';
import { FlatList } from 'react-native-gesture-handler';
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
} from './styles';

export interface Character {
  char_id: number;
  name: string;
  birthday: string;
  img: string;
  nickname: string;
}

const CharactersList: React.FC = () => {
  const [fakeData, setFakeData] = useState<Character[]>([
    {
      char_id: 1,
      name: 'Walter White',
      birthday: '09-07-1958',
      img:
        'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
      nickname: 'Heisenberg',
    },
    {
      char_id: 2,
      name: 'Jesse Pinkman',
      birthday: '09-24-1984',
      img:
        'https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441',
      nickname: "Cap n' Cook",
    },
    {
      char_id: 3,
      name: 'Skyler White',
      birthday: '08-11-1970',
      img:
        'https://s-i.huffpost.com/gen/1317262/images/o-ANNA-GUNN-facebook.jpg',
      nickname: 'Sky',
    },
  ]);

  return (
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

        <FlatList
          data={fakeData}
          keyExtractor={item => item.char_id}
          renderItem={({ item }: { item: Character }) => {
            return <CharacterCard item={item} />;
          }}
        />
      </Content>
    </Container>
  );
};

export default CharactersList;
