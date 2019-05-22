import React from 'react';
import './styles.scss';
import { NavLink } from 'react-router-dom';
import logo from './assets/logo v1.png';

function NavbarImg() {
  return (
    <li className="col-lg-10 col-md-8 col-sm-7 header-logo-container">
      <NavLink className="header-logo" to="/">
        <img className="header-logo" src={logo} alt="LogoImage" />
      </NavLink>
    </li>
  );
}

export default NavbarImg;
