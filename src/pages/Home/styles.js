import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas: 
    'header'
    'content';

  overflow: hidden;

  > main {
    grid-area: content;
    overflow: auto;
    
    ::-webkit-scrollbar {
      width: 1.5rem;
    }
    ::-webkit-scrollbar-track {
      background: rgba(0, 0, 0, 0);
    }
    ::-webkit-scrollbar-thumb {
      border: 5px solid transparent;
      background-clip: padding-box;
      background-color: ${({ theme }) => theme.COLORS.GRAY_100};
      border-radius: 1rem;
    }    
  }  
`;

export const Content = styled.div`
  max-width: 116.2rem;
  margin: 0 8rem;
  flex: 1 1 0%;

  .section {
    display: flex;
    flex-direction: column;
  }
  @media only screen and (max-width: 992px) { 
    margin: 0 4rem;
    .section { 
      margin: 6rem auto;
    }
  } 
`;

export const Slogan = styled.div`
  height: 26rem;

  display: flex;
  align-items: center;
  justify-content: flex-end;

  margin-top: 15.4rem;
  border-radius: 0.8rem;
 
  background: linear-gradient(175deg, #091E26 0%, #00131C 100%);

  position: relative;

  > img {
    width: max(63.2rem);
    left: -3rem;

    bottom: 0; 
    position: absolute;
  }

  > div {
    font-family: 'Poppins', sans-serif;
    text-align: center;
    padding: 0 4rem;
    > h1{
      font-size: clamp(2rem, 1rem + 2vw, 4rem);
      font-weight: 500;
    }

    > p{
      font-weight: 400;
    }
  }

  @media only screen and (max-width: 992px) { 
    height: 13rem;
    margin-top: 10rem;
    margin-bottom: 10rem;
    background: none ;
    img {
      width: 100%;
      left: 0;
      z-index: -1;

    }
    > div {
      padding: 0;
      margin-top: 24rem;
      margin-bottom: 0.8rem;
      z-index: -1;
    }
  
  }
`;