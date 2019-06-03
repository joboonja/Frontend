import React from 'react';
import './styles.scss';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { tokenConfig } from '../../../../services/axios/config';

export default function NavbarItem({ name, url, logout }) {
  let itemWidthStyle = 'col-lg-1 col-md-2 col-sm-2';
  if (name.length > 6) {
    itemWidthStyle = 'col-lg-1 col-md-2 col-sm-3';
  }
  return (
    <li className={`${itemWidthStyle} header-item`}>
      <NavLink to={url} className="header-link">
        <text onClick={() => {
          if (logout) {
            localStorage.removeItem(tokenConfig.localStorageKey);
            localStorage.removeItem('username');
          }
        }}
        >
          {name}
        </text>
      </NavLink>
    </li>
  );
}

NavbarItem.propTypes = {
  name: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  logout: PropTypes.bool,
};

NavbarItem.defaultProps = {
  logout: false,
};
