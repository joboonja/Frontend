import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function SearchInput({ value, onChange }) {
  return (
    <div>
      <input className="searchInput" placeholder="جستجو در جاب‌اونجا" value={value} onChange={onChange} />
    </div>
  );
}

SearchInput.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};

SearchInput.defaultProps = {
  value: null,
  onChange: null,
};

export default SearchInput;
