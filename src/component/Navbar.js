import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import logo from '../assets/logo.png';
import CategoriesContainer from '../containers/CategoriesContainer';

const Navbar = ({ eventHandler }) => (
  <div className="navbarContainer">
    <div className="navbar">
      <div className="logo">
        <Link to="/"><img className="logo" src={logo} alt="logo" /></Link>
      </div>
      <div>
        <CategoriesContainer eventHandler={eventHandler} />
      </div>
    </div>
  </div>
);

Navbar.propTypes = {
  eventHandler: PropTypes.func,
};

Navbar.defaultProps = {
  eventHandler: '',
};

export default Navbar;
