import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  gap: 2.2rem;
 
  background-color: ${({ theme}) => theme.COLORS.GRAY_500};
  color: ${({ theme }) => theme.COLORS.WHITE}; 
  border: "none";
  border-radius: 1rem;

  margin-bottom: 0.8rem;
 
  padding-right: 1.6rem;
 
  > select {
    background: transparent;
    color: ${({ theme }) => theme.COLORS.GRAY_300}; 
  }

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



