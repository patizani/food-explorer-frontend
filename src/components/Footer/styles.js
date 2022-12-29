import styled from "styled-components";

export const Container = styled.footer`
  grid-area: footer;

  width: 100%;
  height: 5rem;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  
  padding: 0 2rem;
   
  > p {
    font-family: ' DM Sans', sans-serif;
    font-style: Regular;
    font-size: 1.4rem;
    line-height: 1.8rem;
    text-align: left;
    color: ${({ theme }) => theme.COLORS.BEIGE};
  }

  @media screen and (max-width: 992px) {  
    justify-content: center;
    flex-direction: column;
    align-items: inherit;
    flex-wrap: inherit;
    gap: 1rem;
    padding: 0.4rem 5.3rem;
  }
`;

export const LogoFooter = styled.div`
  width: 19.7rem;
  display: flex;
  align-items: center;
  gap: 1.1rem;
 
  opacity: .3;
  
  > h1 { 
    font-size: clamp(1.2rem, 1rem + 5vw, 2.5rem);
    color: ${({ theme }) => theme.COLORS.WHITE}; 
  }

  > svg {
    width: clamp(1.4rem, 1rem + 2vw, 2.9rem);
  } 
`;