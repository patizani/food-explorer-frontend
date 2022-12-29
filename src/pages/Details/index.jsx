import { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import { useCart } from '../../hooks/cart';

import { api } from '../../services/api';

import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { Button } from '../../components/Button';
import { ButtonBack } from '../../components/ButtonBack';
import { Ingredient } from '../../components/Ingredient';

import { Container, Main, Ingredients, Content, Info } from './styles';

import { FiMinus, FiPlus } from 'react-icons/fi';

import receipt from '../../assets/receipt.svg';

export function Details() {
  const [quantity, setQuantity] = useState(1);
  const [data, setData] = useState({});

  const { handleAddProductToCart, paymentAccept } = useCart();

  const params = useParams();
  const navigate = useNavigate();

  const imageURL = data && `${api.defaults.baseURL}/files/${data.image}`;

  function HandleBack(){
    navigate("/");
  }

  function handleAddQuantity(){
     const isGreater10 = quantity >= 9;
    if(isGreater10) {
      return
    }

    setQuantity(quantity + 1);
  }
  
  function handleRemoveQuantity(){
    const isLess0 = quantity <= 1;
    if (isLess0) {
      return
    }
    setQuantity(quantity - 1);
  }

  useEffect(() => {
    async function fetchProduct(){
      const response = await api.get(`/products/${params.id}`);
      setData(response.data);
    }
    fetchProduct();
  }, []);

  return(
    <Container>
      <Header />
      <main>
      <Content>
        <ButtonBack
          onClick = {HandleBack}
        />
        <Main>
          <div>
            <img src={imageURL} alt={`imagem de ${data.title}`} />
          </div>
          <div>

            <h1>{data.title}</h1>
            <p>{data.description}</p>
            <Ingredients>
              {
                data.ingredients && data.ingredients.map(ingredient => (
                  <Ingredient key={String(ingredient.id)} name={ingredient.name} image={ingredient.image}/>
                ))
              }
            </Ingredients>
            <Info> 
              <strong>R$ {data.price}</strong>
              <button
                onClick={handleRemoveQuantity} 
                className="btn"><FiMinus size={25}/>
              </button>
              
              <span>0{quantity}</span>

              <button
                onClick={handleAddQuantity}
                className="btn"><FiPlus size={25}/>
              </button>
              <div>
                <Button 
                  title="incluir"
                  image={receipt}
                  onClick={() => handleAddProductToCart(data, quantity, imageURL)}
                  disabled={paymentAccept}
                />
              </div>
            </Info>
          </div>
        </Main>
               
      </Content>
      </main>
      <Footer />
    </Container>
  );
}