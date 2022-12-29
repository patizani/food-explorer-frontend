import styled from 'styled-components';

export const Container = styled.button`
  width: 100%; 
  /* background: transparent; */
  color: ${({theme, isActive}) => isActive ? theme.COLORS.RED : theme.COLORS.GRAY_100};
  background: ${({theme, isActive}) => isActive ? theme.COLORS.WHITE : theme.COLORS.BACKGROUND_900};

  height: 2.6rem;
  border: 0;
  padding: 0 1.6rem;
  white-space: nowrap;
  font-weight: 400;
  line-height: 2.6rem;

  &:disabled {
    opacity: 0.5;
  }
`;