import styled from 'styled-components';

export const Container = styled.button`
  width: 100%;
  padding-left: 30px;
  padding-right: 30px;
  height: 5.6rem;
 
  border: 0;
  border-radius: 0.5rem;

  background-color:${({ theme }) => theme.COLORS.RED};
  color:${({ theme }) => theme.COLORS.WHITE};
  font-family: 'Poppins', sans-serif;
  font-size: 1.4rem;
  font-weight: 500;
  line-height: 2.4rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.1rem;

  &:disabled {
    opacity: 0.5;
  }
`;