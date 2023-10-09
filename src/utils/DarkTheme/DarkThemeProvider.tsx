import { type ReactNode } from 'react';
import { useAppSelector } from '@hooks/reduxHooks/hooks';
import { ThemeProvider } from 'styled-components';
import { darkTheme, lightTheme } from '@constants/styles/theme';

interface DarkThemeProviderProps {
  children?: ReactNode;
}
export const DarkThemeProvider: React.FC<DarkThemeProviderProps> = ({ children }: DarkThemeProviderProps) => {
  const { theme: darkThemeEnabled } = useAppSelector((store) => store.theme);
  return <ThemeProvider theme={darkThemeEnabled.type === 'dark' ? darkTheme : lightTheme}>{children}</ThemeProvider>;
};
