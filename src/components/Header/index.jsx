import { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/cart';

import { api } from '../../services/api';

import { FiSearch, FiShoppingCart, FiHeart, FiEdit } from 'react-icons/fi';
import { Container, LogoHeader, Search, Logout } from './styles';
import { ButtonText } from '../ButtonText';
import { Button } from '../Button';

import logoHeader from '../../assets/logoHeader.svg';
import receipt from '../../assets/receipt.svg';
import signOutImage from '../../assets/signOut.svg';

export function Header({search, toggleFavorites, isFiltered}){
  const [orders, setOrders] = useState([]);

  const { user, signOut } = useAuth();
  const { cart } = useCart();

  const navigate = useNavigate();

  const isCartIsEmpty = cart.length === 0;


  function HandleRequest(){
    navigate("/orders");

  }
  function HandleMyCart(){
    navigate("/payment");
  }

  function handleSignOut(){
    navigate("/");
    signOut();
  }

  function handleNewProduct(){
    navigate('/new');
  }
  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get("/orders");
      setOrders(response.data) 
    }

    fetchOrders()
  }, [])

  return (
    <Container>
      <LogoHeader to ="/">
        <img 
          src={logoHeader}
          alt="Polígono azul do logo Food Explorer"
        />
        <h1>food explorer</h1>
      </LogoHeader>
      {
         user.isAdmin 
         ?
          <ButtonText
            title="Novo Produto"
            onClick={handleNewProduct}
          />
        :
          <ButtonText
            title="Meus favoritos"
            isActive={isFiltered}
            onClick={toggleFavorites}
          />
      }
      <Search>
        {<FiSearch size={20}/>}
        <input 
          type="text"
          placeholder="Busque pelas opções de pratos"  
          onChange={e => {search(e.target.value)}}
        />
      </Search>
      {
         user.isAdmin ?
        <Button 
          title= {`Pedidos (${orders.length})`}
          label="Ícone do botão Receipt"
          image= {receipt}
          onClick={HandleRequest}
          disabled={isCartIsEmpty}
        />
        :
        <Button 
          title= {`Meu Pedido (${cart.length})`}
          label="Ícone do botão Receipt"
          image= {receipt}
          onClick={HandleMyCart}
          disabled={isCartIsEmpty}
        />
     }
      <div className="iconMobile">
      {
         user.isAdmin 
         ?
         <button
         onClick={handleNewProduct}
         className="btn">
           <FiEdit size={22}/>
       </button>
         :
       <button
          isActive={isFiltered}
          onClick={toggleFavorites}
          className="btn">
            <FiHeart size={22}/>
        </button>
      }

        {/* <div className="cart"> */}
          <button
            onClick={HandleMyCart}
            disabled={isCartIsEmpty}
            className="cart">
              <FiShoppingCart size={22} />
            <span>{cart.length}</span>
          </button> 
        {/* </div> */}
      </div>
    
      <Logout>
        <Button 
          label="Ícone do botão Logout"
          image= {signOutImage}
          onClick={handleSignOut}
        />
      </Logout> 

      <div className="username">
          <span>Bem-vindo: </span>
          <strong>{user.name}</strong>
      </div>
    </Container>
  );
}