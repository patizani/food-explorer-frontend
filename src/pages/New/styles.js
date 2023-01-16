import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  min-height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto 5rem;
  grid-template-areas:
    "header"
    "content"
    "footer";
  
  > main {
    grid-area: content;
    overflow-y: auto;
    padding: 0 20px;
  }

  .tags {
    width: 100%;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;

    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 0.5rem;
    padding: 0.5rem 0.5rem 0;
  }

  @media screen and (max-width: 992px) {  
    .tags {
      width: 60%;
    }
    
  }  
`;

export const Content = styled.div`
  max-width: 116.2rem;
  margin: 0 auto;
  flex: 1 1 0%;

  display: flex;
  flex-direction: column;
  /* align-items: center; */

  @media screen and (max-width: 992px) {  
    width: 100%;

    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    gap: 4rem;

    margin-top: 1.4rem;
    margin-bottom: 2rem;
  }
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
 
  > legend {
    font-family: 'Poppins', sans-serif;
    font-style: Medium;
    font-size: 3.2rem;
    line-height: 4.5rem;

    margin-bottom: 3.2rem;
  }

  > button {
    width: 30%;
    height: 4.8rem;
    
    align-self: flex-end;

    background: ${({ theme }) => theme.COLORS.GRAY_500};
    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 0.5rem;
    color: ${({ theme }) => theme.COLORS.WHITE};

    margin-top: 2.4rem;
    margin-bottom: 12rem;
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }
    right: 7px;
  }
  @media screen and (max-width: 992px) {  
    > button {
      width: 87%;
      position: relative;
      right: 4rem;
}
     
    }
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  gap: 3.2rem;
  
  .files {
    width: 30%;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    input[type='file'] {
      display: none;
    }
    > p {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    label {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;
      padding: 1rem;
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 0.5rem;
      font-size: 1.4rem;
      font-weight: 500;
      line-height: 2.4rem;
      :hover {
        color: ${({ theme }) => theme.COLORS.WHITE};
        border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      }
      cursor: pointer;
    }
  }
  .dropdown {
    width: 20rem;

    display: flex;
    flex-direction: column;
    gap: 0.8rem;

    > label{
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};

    }
    > select{
      height: 4.8rem;

      background: transparent;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 0.5rem;

      padding: 1.4rem;
    }
  }
  .wrapper {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
    flex-wrap: wrap;

    margin-bottom: 3.2rem;
    > p {
      font-family: 'Roboto', sans-serif;
      font-size: 1.6rem;
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
    .tags {
      height: 4.8rem;
      border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
      border-radius: 0.5rem;
      overflow-x: auto;
    }
  }
 
  @media screen and (max-width: 992px) {  
    width: 100%;
    flex-wrap: wrap;
    .files{
      width: 90% ;
    }
    .wrapper {
      margin-bottom: auto;
      margin-top: 2rem;
    }
    .resize{
      width: 90% ;
    }
  }
`;