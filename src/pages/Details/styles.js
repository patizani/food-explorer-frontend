import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  padding: 0 20px;
  position: fixed;

  display: grid;
  grid-template-rows: 10.5rem auto 5rem;
  grid-template-areas: 
    'header'
    'content'
    'footer';
  
  > main {
    grid-area: content;
    overflow-y: auto;
  }
`;

export const Content = styled.div`
  max-width: 116.2rem;
  margin: 0 auto;
  flex: 1 1 0%;

  display: flex;
  flex-direction: column;
  align-items: center;

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

export const Main = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4rem;

  div:nth-child(1) {
    max-width: 39rem;
    border-radius: 50%;
    margin-top: 3rem;
    img {
       max-width: 100%;
    }
  }
  > div:nth-child(2) {
      max-width: 60rem;
      align-items: center;
      font-family: 'Poppins', sans-serif;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    h1 {
      margin-top: 0;
      margin-bottom:0.8rem;
    }
    p {
      text-align: left;
    }
    img {
      display: block;
    }
  }

  @media screen and (max-width: 992px) {  
    flex-direction: column;
    justify-content: center;
    align-items: center;
 
    > div:nth-child(1) {
      max-width: 25rem;
      img {
        max-width: 100%;
      }
    }
    > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      h1 {
        margin-top: 2rem;
        margin-bottom: 1.8rem;
        font-size: clamp(2.4rem, 1rem + 3vw, 4rem);
        font-weight: 700;
      }
      p {
        text-align: center;
        font-size: clamp(1.8rem, .4rem + 3vw, 2.4rem);
      }
      div:nth-child(3) {
        img {
         display: none;
        }
      }
    }
  }
`;

export const Ingredients = styled.div`
  display: flex;
  gap: 2rem;
  align-items: baseline;

  margin-top: 3rem;
`;

export const Info = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  gap: 1.7rem;

  margin-top: 2rem;
  padding-inline: 0;

  strong {
    min-width: 14rem;
    font-size: clamp(2rem, 1rem + 3vw, 3.2rem);
    line-height: 5.1rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
  }
  span {
    font-size: 2rem;
    font-weight: 700;
  }
  .btn {
    background: none;
    border: none;
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    align-items: center;
  }

  @media screen and (max-width: 992px) {  
    justify-content: center;

    padding-inline: 2rem;
    > strong{
      min-width: 10rem;
    } 
  }
`;