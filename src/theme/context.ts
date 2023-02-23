import { createContext, Dispatch, SetStateAction, useContext } from 'react';
import { ThemeMode } from 'styled-components';

interface IThemeContext {
  setTheme: Dispatch<SetStateAction<ThemeMode>>;
  theme: ThemeMode;
  toggleTheme: () => void;
}

const defaultContext: IThemeContext = {
  setTheme: () => null,
  theme: 'dark',
  toggleTheme: () => null,
};

export const ThemeContext = createContext<IThemeContext>(defaultContext);

export const useThemeContext = () => useContext(ThemeContext);
