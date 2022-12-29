import styled from 'styled-components'

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  color: ${({ theme }) => theme.COLORS.GRAY_200};
`;

export const TextareaInput= styled.textarea`
  width: 100%;
  height: 17.2rem;
  resize: none;
  color: ${({ theme }) => theme.COLORS.WHITE};
  padding: 1.4rem;
  border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
  border-radius: 0.5rem;
  background: transparent;
  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    font-size: 1.6rem;
  }
`;