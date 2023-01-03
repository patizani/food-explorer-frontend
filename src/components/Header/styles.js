import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.header`
  grid-area: header;

  width: 100%;  
  height: 10.4rem;
 
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;

  padding: 0 4rem;
  position: fixed;
  
  > .username {
    position: absolute;
    bottom: 0.3rem;

    font-size: 1.2rem;
      
  }

  > button:nth-child(2){
    max-width: 13.9rem;
  }

  .iconMobile {
      display: none;
    }
    
  > button:nth-child(4) {
    width: clamp(15.6rem,1vw,21.6rem);
    font-size: clamp(1rem, 1vw, 1.4rem);
    padding-right: clamp(2.5px, 5%, 5px);
    padding-left: clamp(2.5px, 5%, 5px);
  }

  @media screen and (max-width: 992px) {  
    height: 13.4rem;
    padding: 0 1rem;
    align-items: center;


    flex-wrap: wrap;
    > button {
      display: none;
    } 

    .iconMobile {
      display: contents;

      align-items: center;
      justify-content: flex-end;

      position: absolute;
    }

    .cart {
      display: flex;
      flex-direction: column-reverse ;
      margin-top:-1.5rem ;
      > span {
        font-size: 1.2rem;
        color: ${({ theme }) => theme.COLORS.LIGHT_BLUE}; 
        padding-left: 2rem;;
      }
    }
  }
`;

export const LogoHeader = styled(Link)`
  max-width: 19.7rem;
  display: flex;
  align-items: center;
  gap: 1.1rem;
  
  > h1 { 
    font-size: clamp(1.2rem, 1rem + 3vw, 2.5rem);
    color: ${({ theme }) => theme.COLORS.WHITE}; 
  }

  > svg {
    width: clamp(1.2rem, 1rem + 3vw, 2.9rem);
  } 
`;

export const Search = styled.div`
  max-width: 41.rem;

  display: flex;
  align-items: center;
  justify-content: space-between;
  flex: 1;
  gap: 0.8rem;

  padding: 0.35rem 0.9rem;
  border-radius: 5px;

  &:focus-within {
      border: 2px solid ${({ theme}) => theme.COLORS.LIGHT_BLUE};
    } 

  background-color: ${({ theme}) => theme.COLORS.BACKGROUND_700};
  border: 2px solid transparent;

  > input {
    width: 100%;
    
    flex: 1;
    font-size: inherit;

    padding: 0.5rem;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE};
    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
 
  @media screen and (max-width: 992px) {  
    min-width: 100%;
    order: 2;

    margin-top: -6.7rem;
  }
`;

export const Logout = styled.div`
  > button {
    background-color: transparent;
    padding-left: 3px;
    padding-right: 3px;
    > img {
      width: clamp(1.4rem, 2rem + 2vw, 2.8rem);
    }
  }
`;

