import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from '../src/components/Navbar/Navbar'
import Home from './containers/Home/Home'
import AboutUs from "./containers/AboutUs/AboutUs";
import Contacts from "./containers/Contacts/Contacts";
import Order from "./containers/Order/Order";
import Footer from "./components/Footer/Footer";
import {Service, ServiceToOrder} from "./types";
import progGif from '../src/assets/programmer.gif'

function App() {
  const [services, setServices] = useState<Service[]>([
    {id: '1', name: 'Service 1', description: 'feature1, feature 2, feature 3', price: 200},
    {id: '2', name: 'Service 2', description: 'previous features + bonus', price: 500}
  ])

  const [toOrder, setToOrder] = useState<ServiceToOrder[]>([]);

  const addToOrderList = (service: Service) =>{
    setToOrder(prev =>{
      const currentIndex = prev.findIndex(item => {
        return item.service === service
      });

      if(currentIndex !== -1) {
        const itemsCopy = [...prev];
        const itemCopy = {...prev[currentIndex]};
        itemCopy.amount ++;
        itemsCopy[currentIndex] = itemCopy;
        return itemsCopy
      }

      return [...prev, {service, amount: 1}]

    })
  }



  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={(
            <Home
            services={services}
            toOrder={toOrder}
            addToOrderList={addToOrderList}
            />
          )}/>
          <Route path="about" element={(
            <AboutUs/>
          )}/>
          <Route path="contacts" element={(
            <Contacts/>
          )}/>
          <Route path="order" element={(
            <Order
            services={toOrder}
            />
          )}/>
          <Route path="*" element={(
            <div className="d-flex flex-row">
              <img src={progGif} alt="programmer"/>
              <h4 className="mt-4 ms-2 w-50">Sorry, the page you're looking for is temporarily unavailable. We'll fix this problem as soon as we can!</h4>
            </div>
          )}/>
        </Routes>
      </main>
      <footer>
        <Footer/>
      </footer>
    </>
  );
}

export default App;
