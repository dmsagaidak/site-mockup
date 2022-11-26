import React from 'react';
import OrderServices from "../../components/OrderList/OrderServices";
import {Link} from "react-router-dom";
import {ServiceToOrder} from '../../types';

interface Props {
  services: ServiceToOrder[],
}

const Order: React.FC<Props> = ({services}) => {
  return (
    <div className="m-3" style={{height: '90vh'}}>
      <p>Your order details</p>
      <OrderServices services={services}/>
      <Link to="buy" className="btn btn-success me-4">Buy</Link>
      <Link to="/" className="btn btn-danger">Cancel</Link>
    </div>
  );
};

export default Order;