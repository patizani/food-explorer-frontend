import styled from 'styled-components';

export const Container = styled.section`
  margin: 2.8rem 0;

  > h2 {
    padding-bottom: 1.6rem;
    margin-bottom: 2.4rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    font-family: 'Poppins', sans-serif;
    font-style: medium;
    font-size: 3.2rem;
    line-height: 4.5rem;
  }
`;

export const Carousel = styled.div`
  position: relative;
  max-width: 136.8rem;

  > div {
    display: flex;
    
    overflow-x: auto;
    scroll-behavior: smooth;
    ::-webkit-scrollbar {
      display: none;
    }
  }

  .btn-left, .btn-right {
    position: absolute;
    z-index: 1;
    height: 36.8rem;
    width: 4.6rem;
    padding-inline: 1rem;
    color: ${({ theme }) => theme.COLORS.WHITE};
  }

  .btn-left {
    top: 0;
    left: 0;
    border: none;
    background: linear-gradient(270deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
  }
  .btn-right {
    top: 0;
    right: 0;
    justify-content: flex-end;
    border: none;
    background: linear-gradient(90deg, rgba(0, 10, 15, 0.272541) 0%, #000A0F 100%);
  }
`;