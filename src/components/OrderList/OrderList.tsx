import React from 'react';
import {useNavigate} from "react-router-dom";
import OrderServices from "./OrderServices";
import {ServiceToOrder} from "../../types";

interface Props {
  services: ServiceToOrder[]
}

const OrderList: React.FC<Props> = ({services}) => {
  const navigate = useNavigate();
  return (
    <>
      <OrderServices services={services}/>
      <button className="btn btn-success"
              onClick={() => navigate('/order')}
      >Place an order</button>
    </>
  );
};

export default OrderList;