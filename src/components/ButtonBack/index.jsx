import { Link } from 'react-router-dom';
import { Container } from './styles';

import { FiChevronLeft } from 'react-icons/fi';

export function ButtonBack({ ...rest }) {
  return(
    <Container 
      type="button"
      {...rest }
    > 
      <Link to="/"> <FiChevronLeft size={30}/>Voltar</Link>
    </Container>  
  );
}