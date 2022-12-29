import { useState, useEffect } from "react";

import { api } from '../../services/api';

import { useAuth } from '../../hooks/auth';
import { useCart } from '../../hooks/cart';

import { Container } from "./styles";

import { PixTab }  from "./pix";
import CardTab from "./card";

import imagePix from '../../assets/imagePix.svg';
import imageCreditCard from '../../assets/imageCreditCard.svg';
import clockWaiting from '../../assets/clockWaiting.svg';
import clockCheck from '../../assets/clockCheck.svg';
import forkKnife from '../../assets/forkKnife.svg';

export const OrdersPayment = () => {
  const { user } = useAuth();
  const { paymentAccept } = useCart();

  const [orderUser, setOrderUser] = useState([]);

  const [activeTab, setActiveTab] = useState("");

  function DefaultTab(){
    if (paymentAccept){
      if (orderUser.status == "pendente"){
        return <div className="defaultab">
       <img src={clockCheck} alt="ícone do status de Pagamento Aprovado." />
        Seu pedido está pendente de início de preparo.
       </div>
      }else if (orderUser.status == "preparando"){
        return <div className="defaultab">
        <img src={clockCheck} alt="ícone do status de Pagamento Aprovado." />
          Seu pedido está sendo preparado.
        </div>
      }else if (orderUser.status == "entregue"){
        return <div className="defaultab">
        <img src={forkKnife} alt="ícone do status de Pedido Entregue." />
          Seu pedido foi entregue!
        </div>
      }
    }else{
      return <div className="defaultab">
        <img src={clockWaiting} alt="ícone do status Aguardando pagamento no caixa" />
        Aguardando pagamento no caixa
      </div> 
    }
  };

  const handlePix = () => {
    { paymentAccept ?  setActiveTab("") : setActiveTab("pix")} ;
  };

  const handleCard = () => {
    { paymentAccept ?  setActiveTab("") : setActiveTab("card")} ;
  };

  useEffect(() => {
    async function fetchOrder() {
      const response = await api.get(`/orders/${user.id}`)
      setOrderUser(response.data)
    }
    fetchOrder()
  },[])

  return(
    <Container>
      <div className="Tabs">
      {/* Tab nav */}
        <ul className="nav">
          <li 
            className={activeTab === "pix" ? "active" : ""}
            onClick={handlePix}
            
          >
            <img src={imagePix} alt="ícone do pix" />
            PIX
          </li>
          <li 
            className={activeTab === "card" ? "active" : ""}
            onClick={handleCard}
          >
            <img src={imageCreditCard} alt="ícone do cartão de crédito" />
            Crédito
          </li>
        </ul>
        <div className="output">
          {activeTab === "pix" ? <PixTab /> :
            activeTab === "card" ? <CardTab /> :
            DefaultTab()
          }
        </div>       
      </div>
    </Container>
  );
}