import React from 'react';
import {Service, ServiceToOrder} from "../../types";

interface Props {
  serviceToOrder: ServiceToOrder,
}

const ServiceItem: React.FC<Props> = ({serviceToOrder}) => {

  const price = serviceToOrder.amount * serviceToOrder.service.price

  return (
    <div className="card m-1 p-2 d-flex flex-row justify-content-around">
      <span style={{width: '150px'}}>{serviceToOrder.service.name}</span>
      <span> x {serviceToOrder.amount}</span>
      <span className="text-right" style={{width: '70px'}}>{price}</span>
    </div>
  );
};

export default ServiceItem;