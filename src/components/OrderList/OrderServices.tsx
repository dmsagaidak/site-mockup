import React from 'react';
import ServiceItem from "./ServiceItem";
import {ServiceToOrder} from "../../types";

interface Props {
  services: ServiceToOrder[]
}

const OrderServices: React.FC<Props> = ({services}) => {
  const total = services.reduce((sum, service) =>{
    return sum + service.amount * service.service.price
  }, 0)

  return (
    <>
      {services.map(service =>(
        <ServiceItem
          key={service.service.id}
          serviceToOrder={service}
        />
      ))}
      <div>
        <p>Total: <b>{total}</b></p>
      </div>
    </>
  );
};

export default OrderServices;