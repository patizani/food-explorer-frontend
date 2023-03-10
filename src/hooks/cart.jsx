import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

export const CartContext = createContext({});

function CartProvider({ children }) {
  const [cart, setCart] = useState( JSON.parse(localStorage.getItem(`@foodexplorer:cart`)) || [])
  const [paymentAccept, setPaymentAccept] = useState(JSON.parse(localStorage.getItem(`paymentAccept`)) || false)

  function handleAddProductToCart(data, quantity, image) {

    try {
      const { id, title, price} = data
      const priceFormatted = quantity * Number(price.replace(',', '.'))
      
      const order = {id, title, price: priceFormatted, image, quantity}
      
      const orderExists = cart.some((ord) => ord.title === order.title)
      if (orderExists) {

        return alert("Esse item já está no carrinho!")
      }
  
      setCart(prevState => [...prevState, order])
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message)
      } else {
        alert("Não foi possível adicionar o item ao carrinho!")
      }
    }
    alert("Item adicionado ao carrinho!")
  }

  function handleRemoveProductFromCart(deleted) {
    setCart(prevState => prevState.filter(item => item.id !== deleted))
  }

  const total = cart.reduce((value, item) => {
    return value + item.price
  },0) 

  async function handleResetCart(id, navigate) {
    localStorage.removeItem(`@:cart`);
    localStorage.removeItem(`paymentAccept`); 

    setCart([]);
    setPaymentAccept(false);

    await api.delete(`/orders/${id}`);
    navigate("/");
  }

  useEffect(() => {
    localStorage.setItem(`@foodexplorer:cart`, JSON.stringify(cart));
  }, [cart])

  useEffect(() => {
    localStorage.setItem(`paymentAccept`, JSON.stringify(paymentAccept))
  }, [paymentAccept])

  return (
    <CartContext.Provider value={{ 
      cart,
      handleAddProductToCart,
      handleRemoveProductFromCart,
      total: String(total).replace('.', ','),
      paymentAccept,
      setPaymentAccept,
      handleResetCart,
    }}>
      { children }
    </CartContext.Provider>
  )
}

function useCart() {
  const context = useContext(CartContext);
  return context;
}

export { CartProvider, useCart };