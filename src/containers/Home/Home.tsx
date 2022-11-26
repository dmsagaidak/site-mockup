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
    <div className="m-2" style={{height: '500px'}}>
      <h2 className="text-center">We work to make your life comfortable</h2>
      <p className="text-center">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio, molestias.</p>
      <div className="text-center">
        <Link to="contacts" className="btn btn-primary">Contact us!</Link>
      </div>
      <div className="row mt-4">
        <div className="col-6" style={{borderRight: '1px dotted #ccc'}}>
          <h3>Our services</h3>
          <Services
            services={services}
            addToOrderList={addToOrderList}
          />
        </div>
        <div className="col-6">
          <OrderList services={toOrder}/>
        </div>
      </div>
    </div>
  );
};

export default Home;