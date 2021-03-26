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
  occupation: string;
  nickname: string;
  birthday: string;
  portrayted: string;
  status: string;
  img: string;
}

interface CharacterListContextData {
  characterList: CharacterState[];
  addCharacter(character: CharacterState): void;
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

  // useEffect(() => {
  //   setTimeout(async () => {
  //     addCharacter({
  //       name: 'Teste 1',
  //       occupation: 'Teste 1',
  //       nickname: 'Teste 1',
  //       birthday: '08-11-1970',
  //       portrayted: 'Igor?',
  //       img: '',
  //     });
  //     addCharacter({
  //       name: 'Teste 2',
  //       occupation: 'Teste 2',
  //       nickname: 'Teste 2',
  //       birthday: '08-11-1970',
  //       portrayted: 'Igor?',
  //       img: '',
  //     });
  //     addCharacter({
  //       name: 'Teste 3',
  //       occupation: 'Teste 3',
  //       nickname: 'Teste 3',
  //       birthday: '08-11-1970',
  //       portrayted: 'Igor?',
  //       img: '',
  //     });
  //   }, 3000);
  // }, []);

  return (
    <CharacterListContext.Provider value={{ characterList, addCharacter }}>
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
