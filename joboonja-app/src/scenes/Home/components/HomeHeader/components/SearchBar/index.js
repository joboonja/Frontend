import React from 'react';
import './styles.scss';
import AddButton from '../../../../../../components/Buttons/AddButton';
import SearchInput from './components/SearchInput';

function SearchBar() {
  return (
    <div className="searchBarContainer">
      <div className="searchBar">
        <div className="searchInputContainer">
          <SearchInput />
        </div>
        <div className="searchButtonContainer">
          <AddButton color="#fffff">
            جستجو
          </AddButton>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
