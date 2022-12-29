import { Container } from './styles';

import { FiX } from 'react-icons/fi';

export function IngredientItem({value, onClick, ...rest}) {
  return (
    <Container>
      {value}
      <button 
        type="button"
        className='button-delete'
        onClick={onClick}
        {...rest}
      >
        <FiX/>
      </button>
    </Container>
  );
}
