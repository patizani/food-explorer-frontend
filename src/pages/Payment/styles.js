import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  /* padding: 0 20px; */
  position: fixed;

  display: grid;
  grid-template-rows: 10.5rem auto;
  grid-template-areas:
    "header"
    "content";
    height: 100vh;
    
  overflow: hidden;
   
  > main {
    grid-area: content;
    overflow: auto;
    overflow-x: hidden;
    
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
  grid-area: content;

  width: 100%;

  padding: 0 2rem;
  margin: 0 auto;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-areas: 'orders payment';
  gap: 2rem;

  @media screen and (max-width: 992px){
    display: flex;
    justify-content: center ;
    flex-direction: column;
    padding-inline: 2rem;
    margin-inline: auto;
  }

  .orders {
    grid-area: orders;

    display: flex;
    flex-direction: column;
    gap: 3rem;

    margin-top: 3rem;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-style: Medium;
      font-size: clamp(2rem, 1rem + 3vw, 3.2rem);
      line-height: 4%.5rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    .scroll {
      height: 70vh;
      overflow-y: auto;
      height: 36rem;
      
      ::-webkit-scrollbar {
        width: 15px;
      }
      ::-webkit-scrollbar-track {
        background: rgba(0, 0, 0, 0);
      }
      ::-webkit-scrollbar-thumb {
        border: 5px solid transparent;
        background-clip: padding-box;
        background-color: ${({ theme }) => theme.COLORS.GRAY_100};
        border-radius: 10px;
      }
    }
    .orders-items {
      display: flex;
      gap: 20px;
      flex-direction: row;
      align-items: center;
      margin-bottom: 1rem;
      padding-right: 4rem;

      > img {
        width: 10rem;
      }
      > div button {
        width: auto;
        padding-inline: 0;
        margin-top: 5px;
        color: #fa0404;
      }

      @media screen and (max-width: 992px){
        img {
          width: 7rem;
        }
      }
    }

    .items {
      display: flex;
      gap: 5px;
      font-family: 'Poppins', sans-serif;
      font-size: 1.5rem;
      line-height: 3.2rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      > span {
        display: flex;
        align-items: center;
        font-size: 1.2rem;
        line-height: 1.9rem;
        color: ${({ theme }) => theme.COLORS.GRAY_400};
      }
        }

    .result {
      font-family: 'Poppins', sans-serif;
      font-size: 2rem;
      line-height: 4.5rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};
      margin-top: 1rem;
      margin-bottom: 2rem;
    }
    
    @media screen and (max-width: 992px){
      .scroll {
         height: 30rem;
        }
    }
  } 
   
  .payment {
    grid-area: payment;
    display: flex;
    flex-direction: column;
    gap: 3rem;

    margin-top: 3rem;

    text-align: center;

    h1 {
      font-family: 'Poppins', sans-serif;
      font-style: Medium;
      font-size: clamp(2rem, 1rem + 3vw, 3.2rem);
      line-height: 4%.5rem;
      color: ${({ theme }) => theme.COLORS.GRAY_100};

      text-align: left;
    }
  } 
`;