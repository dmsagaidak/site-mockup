import React from 'react';
import {Service} from "../../types";

interface Props {
  service: Service,
  onClick: React.MouseEventHandler
}

const ServiceItem: React.FC<Props> = ({service, onClick}) => {
  return (
    <div className="card p-2 mt-1" onClick={onClick}>
      <h5 className="card-title">{service.name}</h5>
      <p className="card-text">{service.description}</p>
      <p className="card-text">{service.price}</p>
    </div>
  );
};

export default ServiceItem;