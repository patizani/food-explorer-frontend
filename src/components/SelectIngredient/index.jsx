import { useEffect, useState } from 'react';
import { api } from '../../services/api';

import { FiPlus } from 'react-icons/fi';
import { Container } from './styles.js';

export function SelectIngredient({value, onClick, onChange, ...rest}) {
  const [ingredients, setIngredients] = useState([]);

  useEffect(() => {
    async function fetchIngredients() {
      const response = await api.get("/ingredients");
      setIngredients(response.data.ingredients) 
    }

    fetchIngredients()
  }, [])

  return (
    <Container>
      <select defaultValue={'DEFAULT'} onChange={onChange}>
      <option value="DEFAULT" disabled>Adicionar</option>
        { ingredients &&
           ingredients.map(ingredient => (
            <option key= {ingredient.id} value={ingredient.name}> 
              {ingredient.name}
            </option>
           ))
        }
      </select>
      <button
        type="button"
        className='button-add'
        onClick={() => onClick(ingredients)}
      >
         <FiPlus/>
      </button> 

    </Container>
  )
};