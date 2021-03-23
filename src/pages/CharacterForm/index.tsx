import React, { useCallback, useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Picker } from '@react-native-picker/picker';
import { Alert } from 'react-native';
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
  const navigation = useNavigation();

  const characterValidation = Yup.object().shape({
    name: Yup.string().required('Obrigatório'),
    birthday: Yup.string().required('Obrigatório'),
    portrayted: Yup.string().required('Obrigatório'),
  });

  const onSubmit = useCallback((data: CharacterFormData) => {
    Alert.alert(
      `${data.name} adicionado!`,
      'O personagem foi adicionado com sucesso!',
      [{ text: 'OK' }],
    );
  }, []);

  const handleBack = useCallback(() => {
    navigation.navigate('CharactersList');
  }, [navigation]);

  const {
    handleChange,
    handleBlur,
    handleSubmit,
    setFieldValue,
    resetForm,
    values,
    errors,
    touched,
    isSubmitting,
  } = useFormik({
    validationSchema: characterValidation,
    initialValues: {
      name: '',
      occupation: '',
      nickname: '',
      birthday: '',
      portrayted: '',
      status: '',
    },
    onSubmit: data => {
      onSubmit(data);
      resetForm();
    },
  });

  return (
    <Container keyboardShouldPersistTaps="handled">
      <Header>
        <HeaderContainer>
          <ReturnButton onPress={handleBack}>
            <ReturnButtonIcon name="arrow-left" />
          </ReturnButton>

          <Title>Adicionar</Title>
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
          error={errors.name}
          isTouched={touched.name}
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
          error={errors.occupation}
          isTouched={touched.occupation}
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
          error={errors.nickname}
          isTouched={touched.nickname}
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
          error={errors.birthday}
          isTouched={touched.birthday}
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
          error={errors.portrayted}
          isTouched={touched.portrayted}
        />

        <StatusPickerContainer>
          <Picker
            selectedValue={values.status}
            onValueChange={(itemValue, itemIndex) => {
              setFieldValue('status', itemValue);
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
