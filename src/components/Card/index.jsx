import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useFavorite } from '../../hooks/favorite';
import { useCart } from '../../hooks/cart';

import { api } from '../../services/api';

import  { Container } from './styles';

import { FiTrash2, FiChevronRight, FiMinus, FiPlus } from 'react-icons/fi';

import { Button } from '../../components/Button';
import { ButtonText } from '../../components/ButtonText';


import  heart  from '../../assets/heart.svg';
import heartfill from '../../assets/heartfill.svg';

export function Card({data, ...rest}){
  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  const imageURL = `${api.defaults.baseURL}/files/${data.image}`;

  const { user } = useAuth();
  const { favorites, addProductToFavorite, removeProductFromFavorite } = useFavorite()
  const { handleAddProductToCart, paymentAccept } = useCart();

  const isFavorite = favorites.some((product) => product.title === data.title)

  function handleEditProduct(id) {
    navigate(`/edit/${id}`);
  }

  function handleDetails(id) {
    navigate(`/details/${id}`);
  }

  function handleAddQuantity() {
    const isGreater10 = quantity >= 9;
    if(isGreater10) {
      return
    }
    setQuantity(quantity + 1);
  }

  function handleRemoveQuantity() {
    const isLess0 = quantity <= 1;
    if (isLess0) {
      return
    }
    setQuantity(quantity - 1);
  }

  async function handleRemoveProduct() {
    const confirm = window.confirm("Deseja realmente excluir esse produto?");

    if (confirm) {
      await api.delete(`/products/${data.id}`);
      location.reload();
    }
  } 

  return (
   
    <Container {...rest}>
      {
        user.isAdmin ?
        <ButtonText 
          icon={FiTrash2}
          onClick={handleRemoveProduct} 
        />
        :
        <ButtonText
          image={isFavorite ? heartfill : heart} 
          label="ícone dos Meus Favoritos"
          onClick={() =>  isFavorite ? removeProductFromFavorite(data) : addProductToFavorite(data)} 
        />
      }
     
      <div>
        <img src={imageURL} alt={data.title} />
      </div>

      {
        user.isAdmin ?
          <ButtonText
            title={data.title}
            icon={FiChevronRight}
            onClick={() => handleEditProduct(data.id)}
          />
        :
          <ButtonText
            title={data.title}
            icon={FiChevronRight}
            onClick={() => handleDetails(data.id)}
          />
      }
      <p>{data.description}</p>
      <strong>R$ {data.price}</strong>
      <div>
        <button
          onClick={handleRemoveQuantity} 
          className="btn"><FiMinus size={25}/>
        </button>
          
        <span>0{quantity}</span>
          
        <button
          onClick={handleAddQuantity}
          className="btn"><FiPlus size={25}/>
        </button>
        <Button
          title="incluir"
          onClick={() => handleAddProductToCart(data, quantity, imageURL)}
          disabled={paymentAccept}
        />
      </div>
   
    </Container>
  );
}