import { createSlice } from '@reduxjs/toolkit';
import type { RootState } from '../index';
import { lightTheme, darkTheme, ThemeEnum } from '../../constants/styles/theme';
import { type DefaultTheme } from 'styled-components';

interface ThemeState {
  theme: DefaultTheme;
}

const initialState: ThemeState = {
    theme: lightTheme,
};

export const themeSlice = createSlice({
    name: 'theme',
    initialState,
    reducers: {
        toggleTheme: (state) => {
            state.theme = state.theme.type === ThemeEnum.light ? darkTheme : lightTheme;
        },
    },
});

export const { toggleTheme } = themeSlice.actions;

export const selectTheme = (state: RootState) => state.theme.theme;

export default themeSlice.reducer;
