import React from 'react';
import {Link} from "react-router-dom";
import Services from "../../components/Services/Services";
import OrderList from "../../components/OrderList/OrderList";
import {Service, ServiceToOrder} from "../../types";

interface Props {
  services: Service[],
  toOrder: ServiceToOrder[],
  addToOrderList: (service: Service) => void
}

const Home: React.FC<Props> = ({services, toOrder,addToOrderList}) => {
  return (
    <div className="m-2">
      <h2 className="text-center">The best company ever</h2>
      <p className="text-center">We will make your events unforgettable!</p>
      <div className="text-center">
        <Link to="order" className="btn btn-success me-3">Place an order</Link>
        <Link to="contacts" className="btn btn-primary">Contact us!</Link>
      </div>
      <div className="row">
        <div className="col-5">
          <h3>Our services</h3>
          <Services services={services} addToOrderList={addToOrderList}/>
        </div>
        <div className="col-5">
          <OrderList services={toOrder}/>
        </div>
      </div>
    </div>
  );
};

export default Home;