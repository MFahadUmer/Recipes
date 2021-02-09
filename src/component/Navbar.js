import React from 'react';
import logo from '../assets/logo.png';
import CategoriesContainer from '../containers/CategoriesContainer';

// eslint-disable-next-line react/prop-types
const Navbar = ({ eventHandler }) => (
  <div className="navbarContainer">
    <div className="navbar">
      <div className="logo">
        <img className="logo" src={logo} alt="logo" />
      </div>
      <div>
        <CategoriesContainer eventHandler={eventHandler} />
      </div>
    </div>
  </div>
);

export default Navbar;
