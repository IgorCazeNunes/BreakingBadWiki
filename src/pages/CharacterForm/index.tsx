import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { useFormik } from 'formik';

import { KeyboardAvoidingView, Platform, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { Picker } from '@react-native-picker/picker';
import { withTheme } from 'styled-components';
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
  StatusPickerContainer,
} from './styles';

interface CharacterFormData {
  name: string;
  occupation: string;
  nickname: string;
  birthday: string;
  portrayted: string;
}

const CharacterForm: React.FC = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('');

  const navigation = useNavigation();

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    values,
    setFieldValue,
  } = useFormik({
    initialValues: {
      name: '',
      occupation: '',
      nickname: '',
      birthday: '',
      portrayted: '',
      status: '',
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

        <StatusPickerContainer>
          <Picker
            selectedValue={values.status}
            onValueChange={(itemValue, itemIndex) => {
              setFieldValue('status', itemValue);
              setSelectedLanguage(itemValue as string);
            }}
            dropdownIconColor="#000000"
          >
            <Picker.Item label="Escolha o status do personagem" value="" />
            <Picker.Item label="Vivo" value="vivo" />
            <Picker.Item label="Morto" value="morto" />
            <Picker.Item label="Desconhecido" value="desconhecido" />
          </Picker>
        </StatusPickerContainer>
      </Content>

      <SaveButton onPress={handleSubmit}>
        <SaveButtonText>Salvar</SaveButtonText>
      </SaveButton>
    </Container>
  );
};

export default CharacterForm;
