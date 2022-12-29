import styled from 'styled-components'

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

  > h1 {
    font-family: 'Poppins', sans-serif;
    font-style: Medium;
    font-size: 3.2rem;
    line-height: 4.5rem;

    color: 1px solid ${({ theme }) => theme.COLORS.GRAY_100};

    margin-top: 3.4rem;
    margin-bottom: 3.4rem;
  }
  > table {
    border-collapse: collapse;
    max-width: 113.2rem;
  }

  > table,
  th,
  td {
    border: 2px solid ${({ theme }) => theme.COLORS.GRAY_500};
    padding-inline: 1rem;
  }

  > table,
  th {
    height: 4.5rem;

    font-style: bold;
    font-size: 1.4rem;
    line-height: 2.2rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    text-align: left;
  }

  > table,
  tr {
    height: 4.5rem;
    font-size: 1.4rem;
    line-height: 2.2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    text-align: center;
  }
`;

export const SelectWrapper = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  > span {
    width: 0.8rem;
    height: 0.8rem;

    position: absolute;
    left: 1.6rem;
  }
  .pendente {
    background: ${({ theme }) => theme.COLORS.RED};
  }
  .preparando {
    background: ${({ theme }) => theme.COLORS.YELLOW};
  }
  .entregue {
    background: ${({ theme }) => theme.COLORS.GREEN};
  }
  select {
    width: 100%;

    background: transparent;
    color: ${({ theme }) => theme.COLORS.GRAY_300};

    border: 1px solid ${({ theme }) => theme.COLORS.WHITE};
    border-radius: 0.5rem;
    
    padding: 1.3rem 1.6rem 1.3rem 3.2rem;

    @media only screen and (max-width: 992px) { 
      width: 17.5rem;
    }
  }
`;
