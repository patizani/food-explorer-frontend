import styled from 'styled-components'

export const Container = styled.div`
  width: 53rem;
  overflow: hidden;

  .outline{
  @media screen and (max-width: 992px){
      width:100%
    }
  }

  .defaultab {
    height: auto; 
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center ;
    gap: 4.9rem;
    font-size: 2.4rem;
    line-height: 2.4rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400}; 

    margin-top: 2rem;
    margin-bottom: 2rem;

    > img {
      opacity: 0.7;
    } 
  }

  .Tabs {
    width: 100%;

    background: transparent;
    color: ${({ theme }) => theme.COLORS.WHITE}; 
    margin-right: 1.5rem;
    padding: 1rem;

    @media screen and (max-width: 992px){
      width: 60%;
      padding: 0;
    }

    ul.nav {
    margin: 0 auto 0;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border: 1px solid rgba(255, 255, 255, 0.1);
    border-top-left-radius:0.8rem;
    border-top-right-radius:0.8rem;

    @media screen and (max-width: 992px){
      width: 100%;
    }
  }

  ul.nav li {
    width: 50%;
  
    display: flex;
    align-items: center;
    gap: 0.5rem;
    justify-content: center;

    padding: 1rem;
    text-align: center;
    cursor: pointer;
    transition: all 0.7s;
 
    img {
      max-width: 100%;
      height: 2.5rem;
    } 
  }

  ul.nav li:nth-child(1) {
    border-right: 1px solid rgba(255, 255, 255, 0.1);
  }

  ul.nav li:hover {
    background: rgba(50, 224, 196, 0.05);
  }

  ul.nav li.active {
    background: rgba(255, 255, 255, 0.1);
  }

  .output {
    margin: 0 auto;
    border: 1px solid rgba(255, 255, 255, 0.1);
    height: auto; 
  }

  .PixTab {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center ;
    gap: 2rem;
    > img {
      margin-top: 2rem;
      width: 30%;
    }
    > button {
      width: 34.8rem;
      margin-bottom: 1.5rem;
    }
    @media screen and (max-width: 992px){
      > button {
        width: 100%;
      }
    }
  }

  .CardOut {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center ;
    padding-inline: 12rem;
    gap: 2rem;
    }

  .CardTab {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 0.8rem;

    text-align: left;
    margin: 5rem;

    > img {
      margin-top: 2rem;
      width: 30%;
    }
    
    @media screen and (max-width: 992px){
      width: max-content;
      flex-direction: column;
      justify-content: center;
      margin: 1rem;
    }
  }
}
`;