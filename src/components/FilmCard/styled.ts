import styled from 'styled-components';
import { scaleAnimation } from '@constants/styles/animation';
import { devices } from '@constants/styles/media';

export const FilmContainer = styled.div``;
export const FilmStyled = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${({ theme }) => theme.gaps.gap8};
  cursor: pointer;
  ${scaleAnimation}
  @media (pointer: fine) {
    &:hover {
      box-shadow: ${({ theme }) => theme.colors.shadow};
    }
  }
`;
export const Text = styled.p``;
export const Dot = styled.div`
  width: 3px;
  background-color: ${({ theme }) => theme.colors.font};
  height: 3px;
  border-radius: 100px;
`;
export const Preview = styled.img`
  width: 100%;
  max-height: 180px;
  object-fit: cover;
  object-position: top;
  @media ${devices.sm} {
    max-height: 220px;
  }
`;
export const Poster = styled.img`
  border-radius: 50%;
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
  object-fit: cover;
  object-position: top;
`;
export const InfoContainer = styled.div`
  display: flex;
  align-content: center;
  gap: ${({ theme }) => theme.gaps.gap16};
  padding: 8px;
`;
export const Details = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const SubDetails = styled.div`
  display: flex;
  align-items: center;
  gap: ${({ theme }) => theme.gaps.gap4};
`;
