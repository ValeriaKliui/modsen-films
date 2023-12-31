import { createGlobalStyle, css } from 'styled-components';
import RobotoWoff from '@assets/fonts/Roboto.woff';
import RobotoWoff2 from '@assets/fonts/Roboto.woff2';

import { transitionAnimation } from './animation';
import { devices } from './media';

export const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Roboto';
  src:
    url(${RobotoWoff2}) format('woff2'),
    url(${RobotoWoff}) format('woff');
}
html {
  height: 100%;
}
body {
  color: ${({ theme }) => theme.colors.font};
  background-color: ${({ theme }) => theme.colors.background};
  font-family: 'Roboto', sans-serif;
  font-size: ${({ theme }) => theme.fontSizes.large};
  height: 100%;
  
  @media ${devices.md} {
    font-size: ${({ theme }) => theme.fontSizes.medium};
  }
}
#root {
  display: flex;
  flex-direction: column;
  height: 100%;
}
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}
*::before,
*::after {
  box-sizing: border-box;
}
a {
  text-decoration: none;
  ${transitionAnimation};
  cursor: pointer;
  color: inherit;
  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
}
h1, h2, h3, h4, h5, h6 {
  color: ${({ theme }) => theme.colors.font};
}
li {
  list-style-type: none;
}  
`;
export const wrapper = css`
  max-width: 1440px;
  padding: 20px;
  margin: 0 auto;
  width: 100%;
  @media ${devices['2xl']} {
    max-width: 1440px;
  }
  @media ${devices.xl} {
    max-width: 1240px;
  }
  @media ${devices.lg} {
    max-width: 1000px;
  }
  @media ${devices.md} {
    max-width: 730px;
  }
  @media ${devices.sm} {
    max-width: 600px;
  }
  @media ${devices.xs} {
    max-width: 290px;
  }
`;
export const border = css`
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
  @media ${devices.sm} {
    border: none;
  }
`;
