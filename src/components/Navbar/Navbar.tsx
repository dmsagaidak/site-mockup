import React from 'react';
import {NavLink} from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-success">
      <div className="container-fluid">
        <span className="navbar-brand text-white">ABCD</span>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink to={'/'} className="nav-link text-white-50">Home</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'about'} className="nav-link text-white-50">About us</NavLink>
            </li>
            <li className="nav-item">
              <NavLink to={'contacts'} className="nav-link text-white-50">Contacts</NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;