import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;

  > select {
    background: transparent;
    color: ${({ theme }) => theme.COLORS.GRAY_300}; 
  }
  background-color: ${({ theme, isNew }) => isNew ? 'transparent' : theme.COLORS.GRAY_500};
  color: ${({ theme, isNew }) => isNew ? theme.COLORS.GRAY_500 : theme.COLORS.WHITE}; 

  border: ${({ theme, isNew }) => isNew ? `1px dashed ${theme.COLORS.GRAY_300}` : "none"};

  margin-bottom: 0.8rem;
  border-radius: 1rem;
  padding-right: 1.6rem;
  gap: 2.2rem;
  > button {
    border: none;
    background: none;
  }

  .button-delete {
    color: ${({ theme }) => theme.COLORS.RED}
  }

  .button-add {
    color: ${({ theme }) => theme.COLORS.GRAY_300}
  }

  > input {
    width: 100%;
    height: 3.2rem;

    padding: 1.2rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    border: none;
  } 
`;



