import { useState, useEffect } from 'react';

import { useCart } from '../../hooks/cart';

import { Container, Content } from './styles';

import { Header } from '../../components/Header';
import { ButtonText } from '../../components/ButtonText';
import { OrdersPayment } from '../../components/OrdersPayment';
import { Footer } from '../../components/Footer';

const BRReal = Intl.NumberFormat('pt-BR', { style: 'currency', currency: 'BRL' }) 

export function Payment() {
  const [ orders, setOrders ] = useState(() =>{
  const localData = localStorage.getItem("@foodexplorer:cart")
    return localData ? JSON.parse(localData) : []
  })

  const [ value, setValue ] = useState(0)

  const { handleRemoveProductFromCart, paymentAccept } = useCart();

  function removeProduct(id) {

    const filteredOrders = orders.filter(product => product.id !== id)

    setOrders(filteredOrders)

    localStorage.setItem("@foodexplorer:cart", JSON.stringify(filteredOrders))
  }

  useEffect(()=> {
    let sum = 0
    orders.forEach(product => {
      sum += product.quantity * product.price;
    });
    setValue(sum)
  },[orders])

  return (
    <Container>
    <Header />
    <main>
      <Content>
        <div className="orders">
          <h1>Meu Pedido</h1>
          <div className="scroll">   

            { orders &&
              orders.map(order => ( 
              <div key={order.id} className="orders-items">
                <img src={order.image} alt={order.title} />
                <div>
                  <div className="items">
                  {order.quantity} x {order.title} <span>{BRReal.format(order.price)}</span>
                  </div>
                  <ButtonText
                   title='Excluir'
                   onClick={() => { handleRemoveProductFromCart(order.id); removeProduct(order.id);}}
                   disabled={paymentAccept}
                  />
                </div> 
              </div> 
              ))
            }         
          </div>
            
          <div className="result">
            <p>Total: R$ <span> {BRReal.format(value)}</span></p>
          </div>
        </div>
        <div className="payment">
          <h1>Pagamento</h1>
          <OrdersPayment />
        </div>
      </Content>
    <Footer />
    </main>
    </Container>
  );
}