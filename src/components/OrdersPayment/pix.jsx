import { React, useState, Fragment } from "react";

import { api } from '../../services/api';

import { useCart } from '../../hooks/cart';

import { Button } from '../Button';

import receipt from '../../assets/receipt.svg';
import imageQrCode from '../../assets/imageQrCode.png';
import clockCheck from '../../assets/clockCheck.svg';


export const PixTab = ({}) => {
  const { cart, paymentAccept, setPaymentAccept } = useCart();
  const [loading, setLoading] = useState(false);

  async function handleFinishPayment(cart) {
    setPaymentAccept(true);
    setLoading(true)

    const newCart = {
      paymentMethod: 'pix',
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
    <div className="PixTab">
      {
        paymentAccept ? 
        <Fragment>
          <img src={clockCheck} alt="ícone do status Pagamento Aprovado" />
          <p>Pagamento aprovado!</p>

        </Fragment>
        :
        <Fragment>
          <img src={imageQrCode} alt="ícone do QrCode" />
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
}