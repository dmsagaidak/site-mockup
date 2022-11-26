import React from 'react';
import {Route, Routes} from "react-router-dom";
import Navbar from '../src/components/Navbar/Navbar'
import Home from './containers/Home/Home'
import Footer from "./components/Footer/Footer";
import progGif from '../src/assets/programmer.gif'

function App() {
  return (
    <>
      <header>
        <Navbar/>
      </header>
      <main className="container-fluid">
        <Routes>
          <Route path="/" element={(
            <Home/>
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
