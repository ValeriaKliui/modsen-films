import styled from 'styled-components';
import { transitionAnimation } from '@constants/styles/animation';
import { devices } from '@constants/styles/media';

export const MenuStyled = styled.div<{ $isOpened: boolean }>`
  ${transitionAnimation}
  transform: translateX(100%);
  transform: ${({ $isOpened }) => $isOpened && 'translateX(0%)'};
  @media ${devices.sm} {
    padding: 24px;
    justify-content: center;
    background: ${({ theme }) => theme.colors.background};
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${({ theme }) => theme.zIndexes.menu};
    width: 100%;
    height: 105vh;
    display: flex;
    justify-content: center;
    align-items: flex-start;
  }
`;
export const Theme = styled.div`
  display: none;
  @media ${devices.sm} {
    display: flex;
  }
`;
