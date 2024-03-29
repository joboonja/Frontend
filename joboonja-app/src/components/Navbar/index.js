import React from 'react';
import './styles.scss';
import NavbarImg from './components/NavbarImg';
import NavbarItem from './components/NavbarItem';

function Navbar() {
  return (
    <nav className="header-nav">
      <ul className="container header-list">
        <div className="row header-row">
          <NavbarImg />
          <NavbarItem name="حساب کاربری" url="/profile" />
          <NavbarItem name="خروج" url="/login" logout/>
        </div>
      </ul>
    </nav>
  );
}

export default Navbar;
