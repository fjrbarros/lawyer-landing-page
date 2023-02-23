import { FC, ReactNode, useMemo, useState } from 'react';
import {
  createGlobalStyle,
  ThemeProvider,
  DefaultTheme,
  ThemeMode,
} from 'styled-components';
import { ThemeContext } from './context';

interface ITheme {
  children: ReactNode;
}

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
  scroll-behavior: smooth;
}

a {
  text-decoration: none;
}

html, body {
  height: 100vh;
  background-color: ${({ theme }) => theme.color.bgPrimary};
}

::-webkit-scrollbar {
  width: 10px;;
}

::-webkit-scrollbar-track {
  background: #d6d6d6;

}

::-webkit-scrollbar-thumb {
  background: #888;
}

::-webkit-scrollbar-thumb:hover {
  background: #555;
}
`;

const getTheme = (mode: ThemeMode): DefaultTheme => {
  const isThemeDark = mode === 'dark';

  return {
    mode,
    color: {
      bgPrimary: isThemeDark ? '#222222' : '#ffffff',
      bgSecondary: isThemeDark ? '#383838' : '#efefef',
      primary: isThemeDark ? '#ffffff' : '#222222',
      secondary: '#222222',
    },
  };
};

const Theme: FC<ITheme> = ({ children }) => {
  const [theme, setTheme] = useState<ThemeMode>('ligth');

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'ligth' : 'dark'));
  };

  const memoTheme = useMemo(() => getTheme(theme), [theme]);

  return (
    <ThemeContext.Provider value={{ setTheme, theme, toggleTheme }}>
      <ThemeProvider theme={memoTheme}>
        <GlobalStyle />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default Theme;
