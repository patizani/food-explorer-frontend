import styled from 'styled-components';

export const Container = styled.div`
  width: 30rem;
  height: 51.2rem;

  border-radius: 0.8rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  flex: none;

  @media only screen and (max-width: 992px) { 
      z-index: -1;
  }

  > button:first-child{
    display: flex;
    position: absolute;

    top: 1.1rem;
    right: -19.9rem;
   
    background: transparent;
    border: none;
  }

  > button:nth-child(3){
    font-family: 'Poppins', sans-serif;
    font-size: 2.4rem;
    line-height: 3.4rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
    background: transparent;

    margin-bottom: 2rem;
  }

  > div:nth-child(2) {
    width: 17.6rem;
    height: 17.6rem;
    img {
      width: 100%;
    }
  }

  > a {
    h3 {
    margin-top: 1.6rem;
    margin-bottom: 1.8rem;
    font-size: 2.4rem;
    font-weight: 700;
    color: ${({ theme }) => theme.COLORS.WHITE};
    display: flex;
    align-items: center;
    }
  }

  > p {
    text-align: center;
    font-size: 1.4rem;
    padding-inline: 4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
  > strong {
    font-size: 3.2rem;
    color: ${({ theme }) => theme.COLORS.LIGHT_BLUE};
    margin-block: 1.6rem;
  }

  > div:last-child {
    display: flex;
    align-items: center;
    gap: 1.7rem;
    width: 22rem;
    position: relative;
    /* z-index: 10; */
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
      position: relative;
    }
  }
  `;