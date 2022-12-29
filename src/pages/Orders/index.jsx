import { useEffect, useState } from 'react';

import { api } from '../../services/api';

import { Container, Content, SelectWrapper } from './styles';

import { Header } from '../../components/Header';
import { Footer } from '../../components/Footer';

export function Orders() {
  const [orders, setOrders] = useState([]);

  async function handleOrderStatus(order, event) {
    let statusSelect = event.target.value
    const orders = {
      id: order.id,
      status: statusSelect
    }

    await api.put("/orders", orders);
  }

  function formatDate(date) {
    const dateFormatted = new Date(date)

    let monthFormatted = (dateFormatted.getMonth() + 1).toString()
    monthFormatted = (monthFormatted.length == 1) ? `0${monthFormatted}` : monthFormatted

    let minutesFormatted = dateFormatted.getMinutes().toString()
    minutesFormatted = (minutesFormatted.length == 1) ? `0${minutesFormatted}` : minutesFormatted

    return `${dateFormatted.getDate()}/${monthFormatted} às ${dateFormatted.getHours()}h${minutesFormatted}`
  }

  useEffect(() => {
    async function fetchOrders() {
      const response = await api.get("/orders");
      setOrders(response.data) 
    }

    fetchOrders()
  }, [orders])
  return (
    <Container>
    <Header />
    <main>
      <Content>
        <h1>Pedidos</h1>
        <table>
          <thead>
           <tr>
              <th>Status</th>
              <th>Código</th>
              <th>Detalhamento</th>
              <th>Data e hora</th>
            </tr>
          </thead>
          <tbody>
            { orders &&
                orders.map(order => (
                  <tr key={String(order.id)}>
                  <td>
                    <SelectWrapper>
                      <span id='orderStatus' className={order.status}></span>
                      <select name="select" id="select" onChange={event => handleOrderStatus(order, event)}>                <option value="pendente"> Pendente </option>
                        <option value="preparando"> Preparando</option>
                        <option value="entregue">  Entregue</option>
                      </select> 
                    </SelectWrapper>
                  </td>
                  <td>00000{order.id}</td>
                  <td> 
                    {
                      order.items.map(item => (
                        <span key={item.title}> {item.quantity} x {item.title}, </span>
                      ))
                    }
                  </td>
                  <td>{formatDate(order.created_at)}</td>

                </tr>
              ))
            }
          </tbody>
        </table>
      </Content>
    </main>
    <Footer />
    </Container>
  );
}