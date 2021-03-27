import React, {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
} from 'react';

import AsyncStorage from '@react-native-async-storage/async-storage';

interface CharacterState {
  name: string;
  occupation: string[];
  nickname: string;
  birthday: string;
  portrayed: string;
  status: 'Presumed dead' | 'Alive' | 'Deceased' | 'Unknown';
  formatedStatus: 'Vivo' | 'Morto' | 'Desconhecido';
  img: string;
}

interface CharacterListContextData {
  characterList: CharacterState[];
  addCharacter(character: CharacterState): Promise<void>;
  searchCharacters(name: string): CharacterState[];
  searchExactCharacter(name: string): CharacterState;
}

const CharacterListContext = createContext<CharacterListContextData>(
  {} as CharacterListContextData,
);

const storageKey = '@BreakingBadWiki:';

export const CharacterListProvider: React.FC = ({ children }) => {
  const [characterList, setCharacterList] = useState<CharacterState[]>([]);

  useEffect(() => {
    async function loadStoragedData(): Promise<void> {
      const recoveredCharacterList = await AsyncStorage.getItem(
        `${storageKey}CharacterList`,
      );

      if (recoveredCharacterList) {
        setCharacterList(JSON.parse(recoveredCharacterList));
      }
    }

    loadStoragedData();
  }, []);

  const addCharacter = useCallback(
    async (character: CharacterState) => {
      setCharacterList([...characterList, character]);

      await AsyncStorage.setItem(
        `${storageKey}CharacterList`,
        JSON.stringify(characterList),
      );
    },
    [characterList],
  );

  const searchCharacters = useCallback(
    (name: string) => {
      const filteredCharacterList = characterList.filter(c =>
        c.name.toLowerCase().includes(name.toLowerCase()),
      );

      return filteredCharacterList;
    },
    [characterList],
  );

  const searchExactCharacter = useCallback(
    (name: string) => {
      const [exactCharacter] = characterList.filter(c => c.name === name);

      return exactCharacter;
    },
    [characterList],
  );

  return (
    <CharacterListContext.Provider
      value={{
        characterList,
        addCharacter,
        searchCharacters,
        searchExactCharacter,
      }}
    >
      {children}
    </CharacterListContext.Provider>
  );
};

export function useCharacterList(): CharacterListContextData {
  const context = useContext(CharacterListContext);

  if (!context) {
    throw new Error(
      'useCharacterList must be used within an CharacterListProvider',
    );
  }

  return context;
}
