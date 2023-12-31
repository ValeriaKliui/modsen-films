import styled from 'styled-components';
import { loading } from '@constants/styles/animation';

export const AnimatedBlock = styled.div`
  background: linear-gradient(100deg, #ffffff00 40%, #ffffff80 50%, #ffffff00 60%)
    ${({ theme }) => theme.colors.background};
  background-size: 200% 100%;
  background-position-x: 180%;
  animation: 1.5s ${loading} ease-in-out infinite;
`;

export const Skeleton = styled(AnimatedBlock)`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
export const Image = styled(AnimatedBlock)`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 180px;
`;
export const Description = styled.div`
  display: flex;
  gap: ${({ theme }) => theme.gaps.gap16};
  padding: 8px;
  padding-right: 0;
  align-items: center;
`;
export const Avatar = styled(AnimatedBlock)`
  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 50%;
  width: 40px;
  height: 40px;
  flex: 0 0 40px;
`;
export const Info = styled(AnimatedBlock)`
  background-color: ${({ theme }) => theme.colors.secondary};
  width: 100%;
  height: 35px;
`;
