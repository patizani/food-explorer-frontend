import { Container, LogoFooter } from './styles';
import logoFooter from '../../assets/logoFooter.svg';

export function Footer() {
  return (
    <Container>
      <LogoFooter>
        <img src={logoFooter} alt="Polígono cinza do logo Food Explorer" />
        <h1>food explorer</h1>
      </LogoFooter>
      <p>© 2022 - Todos os direitos reservados.</p>
    </Container>
  );
}
