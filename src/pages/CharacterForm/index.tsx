import React, { useCallback, useRef } from 'react';
import { useNavigation } from '@react-navigation/core';
import { useFormik } from 'formik';
import * as Yup from 'yup';

import { Picker } from '@react-native-picker/picker';
import { Alert } from 'react-native';
import emptyCharacterImage from '../../assets/emptyCharacter.png';

import Input, { InputRef } from '../../components/Input';

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
import { useCharacterList } from '../../hooks/characterList';

interface CharacterFormData {
  name: string;
  occupation: string[];
  nickname: string;
  birthday: string;
  portrayed: string;
  status: 'Presumed dead' | 'Alive' | 'Deceased' | 'Unknown';
  formatedStatus: 'Vivo' | 'Morto' | 'Desconhecido';
  img: string;
}

const CharacterForm: React.FC = () => {
  const navigation = useNavigation();
  const { characterList, addCharacter } = useCharacterList();

  const nameInput = useRef<InputRef>(null);
  const occupationInput = useRef<InputRef>(null);
  const nicknameInput = useRef<InputRef>(null);
  const birthdayInput = useRef<InputRef>(null);
  const portrayedInput = useRef<InputRef>(null);

  const characterValidation = Yup.object().shape({
    name: Yup.string().required('Obrigatório'),
    birthday: Yup.string().required('Obrigatório'),
    portrayed: Yup.string().required('Obrigatório'),
  });

  const onSubmit = useCallback(
    async (data: CharacterFormData) => {
      addCharacter({
        ...data,
      }).then(() => {
        Alert.alert(
          `${data.name} adicionado!`,
          'O personagem foi adicionado com sucesso!',
          [
            {
              text: 'OK',
              onPress: () => navigation.goBack(),
            },
          ],
        );
      });
    },
    [addCharacter, navigation],
  );

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
      portrayed: '',
      status: '',
    },
    onSubmit: async data => {
      const { name, occupation, nickname, birthday, portrayed, status } = data;

      let verifiedStatus: 'Vivo' | 'Morto' | 'Desconhecido' = 'Desconhecido';
      let statusFormated: 'Presumed dead' | 'Alive' | 'Deceased' | 'Unknown' =
        'Unknown';

      if (status === 'Alive') {
        statusFormated = status;
        verifiedStatus = 'Vivo';
      } else if (status === 'Deceased') {
        statusFormated = status;
        verifiedStatus = 'Morto';
      }

      let verifiedOccupation = 'Desconhecido';

      if (occupation) {
        verifiedOccupation = occupation;
      }

      let verifiedNickname = 'Desconhecido';

      if (nickname) {
        verifiedNickname = nickname;
      }

      await onSubmit({
        name,
        occupation: [verifiedOccupation],
        nickname: verifiedNickname,
        birthday,
        portrayed,
        status: statusFormated,
        formatedStatus: verifiedStatus,
        img:
          'https://www.camaragibe.pe.gov.br/wp-content/uploads/2019/04/default-user-male.png',
      });

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
          ref={nameInput}
          icon="user"
          placeholder="Nome"
          autoCorrect={false}
          autoCapitalize="words"
          autoCompleteType="off"
          keyboardType="default"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          blurOnSubmit={false}
          onChangeText={handleChange('name')}
          onSubmitEditing={() => occupationInput.current?.focus()}
          onBlur={handleBlur('name')}
          value={values.name}
          error={errors.name}
          isTouched={touched.name}
        />

        <Input
          ref={occupationInput}
          icon="briefcase"
          placeholder="Ocupação"
          autoCorrect={false}
          autoCapitalize="sentences"
          autoCompleteType="off"
          keyboardType="default"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          blurOnSubmit={false}
          onChangeText={handleChange('occupation')}
          onSubmitEditing={() => nicknameInput.current?.focus()}
          onBlur={handleBlur('occupation')}
          value={values.occupation}
          error={errors.occupation}
          isTouched={touched.occupation}
        />

        <Input
          ref={nicknameInput}
          icon="user"
          placeholder="Apelido"
          autoCorrect={false}
          autoCapitalize="words"
          autoCompleteType="off"
          keyboardType="default"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          blurOnSubmit={false}
          onChangeText={handleChange('nickname')}
          onSubmitEditing={() => birthdayInput.current?.focus()}
          onBlur={handleBlur('nickname')}
          value={values.nickname}
          error={errors.nickname}
          isTouched={touched.nickname}
        />

        <Input
          ref={birthdayInput}
          icon="calendar"
          placeholder="Data de nascimento ['MM-dd-aaaa']"
          autoCorrect={false}
          autoCapitalize="none"
          autoCompleteType="off"
          keyboardType="default"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          blurOnSubmit={false}
          onChangeText={handleChange('birthday')}
          onSubmitEditing={() => portrayedInput.current?.focus()}
          onBlur={handleBlur('birthday')}
          value={values.birthday}
          error={errors.birthday}
          isTouched={touched.birthday}
        />

        <Input
          ref={portrayedInput}
          icon="meh"
          placeholder="Ator ou atriz"
          autoCorrect={false}
          autoCapitalize="words"
          autoCompleteType="off"
          keyboardType="default"
          keyboardAppearance="dark"
          returnKeyType="next"
          returnKeyLabel="next"
          blurOnSubmit
          onChangeText={handleChange('portrayed')}
          onBlur={handleBlur('portrayed')}
          value={values.portrayed}
          error={errors.portrayed}
          isTouched={touched.portrayed}
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
            <Picker.Item label="Vivo" value="Alive" />
            <Picker.Item label="Morto" value="Deceased" />
            <Picker.Item label="Desconhecido" value="Unknown" />
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
