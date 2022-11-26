import React from 'react';
import ServiceItem from "./ServiceItem";
import {Service} from "../../types";

interface Props {
  services: Service[],
  addToOrderList: (service: Service) => void
}

const Services: React.FC<Props> = ({services,addToOrderList}) => {
  return (
    <>
      <h5>Choose the service</h5>
      {services.map((service) => (
        <ServiceItem
          key={service.id}
          service={service}
          onClick={() => addToOrderList(service)}/>
      ))}
    </>
  );
};

export default Services;