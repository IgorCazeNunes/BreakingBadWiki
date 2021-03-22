import React, { useCallback } from 'react';
import { useNavigation } from '@react-navigation/core';
import { useFormik } from 'formik';

import { KeyboardAvoidingView, Platform } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import emptyCharacterImage from '../../assets/emptyCharacter.png';

import Input from '../../components/Input';

import {
  Container,
  Header,
  HeaderContainer,
  Title,
  ReturnButton,
  ReturnButtonIcon,
  Content,
  CharacterImage,
  CharacterImageContainer,
  CharacterImageIcon,
  CharacterImageIconContainer,
  ContentTitle,
  SaveButton,
  SaveButtonText,
} from './styles';

interface CharacterFormData {
  name: string;
  occupation: string;
  nickname: string;
  birthday: string;
  portrayted: string;
}

const CharacterForm: React.FC = () => {
  const navigation = useNavigation();

  const { handleChange, handleBlur, handleSubmit, values } = useFormik({
    initialValues: {
      name: '',
      occupation: '',
      nickname: '',
      birthday: '',
      portrayted: '',
    },
    onSubmit: v => {
      // eslint-disable-next-line @typescript-eslint/no-use-before-define
      handleSave(v);
    },
  });

  const handleBack = useCallback(() => {
    navigation.navigate('CharactersList');
  }, [navigation]);

  const handleSave = useCallback((data: CharacterFormData) => {
    console.log(data);
  }, []);

  return (
    <Container>
      <Header>
        <HeaderContainer>
          <ReturnButton onPress={handleBack}>
            <ReturnButtonIcon name="arrow-left" />
          </ReturnButton>

          <Title>Listagem</Title>
        </HeaderContainer>

        <CharacterImageContainer>
          <CharacterImage source={emptyCharacterImage} />

          <CharacterImageIconContainer>
            <CharacterImageIcon name="camera" />
          </CharacterImageIconContainer>
        </CharacterImageContainer>
      </Header>

      <Content>
        <ContentTitle>Informações</ContentTitle>

        <Input
          icon="user"
          placeholder="Nome"
          autoCorrect={false}
          autoCapitalize="words"
          autoCompleteType="off"
          keyboardType="default"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('name')}
          onBlur={handleBlur('name')}
          value={values.name}
        />

        <Input
          icon="briefcase"
          placeholder="Ocupacao"
          autoCorrect={false}
          autoCapitalize="sentences"
          autoCompleteType="off"
          keyboardType="default"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('occupation')}
          onBlur={handleBlur('occupation')}
          value={values.occupation}
        />

        <Input
          icon="user"
          placeholder="Apelido"
          autoCorrect={false}
          autoCapitalize="words"
          autoCompleteType="off"
          keyboardType="default"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('nickname')}
          onBlur={handleBlur('nickname')}
          value={values.nickname}
        />

        <Input
          icon="calendar"
          placeholder="Data de nascimento"
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="off"
          keyboardType="default"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('birthday')}
          onBlur={handleBlur('birthday')}
          value={values.birthday}
        />

        <Input
          icon="meh"
          placeholder="Ator ou atriz"
          autoCorrect={false}
          autoCapitalize="words"
          autoCompleteType="off"
          keyboardType="default"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          onChangeText={handleChange('portrayted')}
          onBlur={handleBlur('portrayted')}
          value={values.portrayted}
        />
      </Content>

      <SaveButton onPress={handleSubmit}>
        <SaveButtonText>Salvar</SaveButtonText>
      </SaveButton>
    </Container>
  );
};

export default CharacterForm;
