import 'styled-components';

declare module 'styled-components' {
  export type ThemeMode = 'ligth' | 'dark';
  export interface DefaultTheme {
    mode: ThemeMode;
    color: {
      primary: string;
      secondary: string;
      bgPrimary: string;
      bgSecondary: string;
    };
  }
}
