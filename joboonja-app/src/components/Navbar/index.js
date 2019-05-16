import React from 'react';

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
