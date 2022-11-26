import React from 'react';
import {ServiceToOrder} from "../../types";

interface Props {
  serviceToOrder: ServiceToOrder;
}

const ServiceItem: React.FC<Props> = ({serviceToOrder}) => {

  const price = serviceToOrder.amount * serviceToOrder.service.price

  return (
    <div className="card">
      <span>{serviceToOrder.service.name}</span>
      <span> x {serviceToOrder.amount}</span>
      <span>{price}</span>
    </div>
  );
};

export default ServiceItem;