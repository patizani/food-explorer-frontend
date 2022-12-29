import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  
  display: flex;
  align-items: center;
  gap: 1.1rem;

  font-family: 'Poppins', sans-serif;
  font-size: clamp(1.8rem, 1.4rem + 3vw, 2.4rem);
  font-weight: 500;
  line-height:3.4rem;
  background: transparent;
  border: none;
  color: ${({ theme }) => theme.COLORS.WHITE};

  margin-top: 2.4rem;
  margin-bottom: 2.2rem;

  > a {
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

`;