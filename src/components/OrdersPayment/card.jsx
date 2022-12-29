import { React, useState, Fragment } from "react";

import { useCart } from '../../hooks/cart';

import { api } from '../../services/api';

import { Button } from '../Button';
import { Input } from '../../components/Input';

import receipt from '../../assets/receipt.svg';
import clockCheck from '../../assets/clockCheck.svg';

const CardTab = () => {
  const { cart, paymentAccept, setPaymentAccept } = useCart();
  const [loading, setLoading] = useState(false);

  async function handleFinishPayment(cart) {
    setPaymentAccept(true);
    setLoading(true)

    const newCart = {
      paymentMethod: 'card',
      status: 'pendente',
      orders: cart.map(item => (
        {
          id: item.id,
          title: item.title,
          quantity: item.quantity
        }
      ))
    }
    await api.post("/orders", newCart)
    setLoading(false);
  }

  return (
    <div className="CardTab">
      {
      paymentAccept ? 
      <div className="CardOut">
        <img src={clockCheck} alt="ícone do status Pagamento Aprovado" />
        <p>Pagamento aprovado!</p>
      </div>
      :
      <Fragment>
        <Input 
          type="number"
          title="Número do Cartão"
          label="card-number"
          placeholder="0000 0000 0000 0000"
        />
        <div style={{ maxWidth: "45%" }}>
          <Input 
            type="data"
            title="Validade"
            label="validated"
            placeholder="04/25"
          />  
        </div>
        <div style={{ maxWidth: "45%" }}>
          <Input 
            type="number"
            title="CVC"
            label="cvc"
            placeholder="000"
          />
        </div>
        <Button 
          title={loading ? "Realizando pagamento" : "Finalizar pagamento"}
          label="Ícone do botão Receipt"
          image= {receipt}
          onClick={() => handleFinishPayment(cart)}
          disabled={loading}
        />
       </Fragment> 
      } 
    </div>
  );
};
export default CardTab;