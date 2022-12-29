import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;

  display: flex;
  align-items: stretch;

  > div {
    margin: auto;
    max-width: 47.6rem;
    display: flex;
    align-items: center;
    justify-content: center; 
    gap: 2rem;   
    h1 {
      font-size: clamp(3.2rem, 1rem + 5vw, 4.2rem);
    }
    > img {
      width: 4.4rem;
      height: 4.8rem;
    }
  }
  @media only screen and (max-width: 992px) { 
    flex-direction: column;

    > div {
      margin: 32px auto;
    }
  }
`;

export const Form = styled.form`
  max-width: 47.6rem; 

  display: flex;
  flex-direction: column;
  flex: 1;

  margin: auto;
  padding: 0 2.4rem;

  border-radius: 1.6rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
  color: ${({ theme }) => theme.COLORS.GRAY_400};
  
  > legend {
      font-family: 'Poppins', sans-serif;
      font-size: 3.2rem;
      line-height: 2.4rem;
      text-align: center;
      color: ${({ theme }) => theme.COLORS.WHITE};
      
      margin-top: 6.4rem;
      margin-bottom: 3.2rem;
  }

  > a {
    text-align: center;
    color: ${({ theme }) => theme.COLORS.WHITE};
    margin: 3.2rem auto 3.2rem;
  }

  @media only screen and (max-width: 992px) { 
    align-items: center;
    margin: 0 auto;

}
`;

