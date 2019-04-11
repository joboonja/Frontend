import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { connect } from 'react-redux';
import AddButton from '../../../../../../components/Buttons/AddButton';
import SearchInput from './components/SearchInput';
import { projectSearchChanged } from '../../../../services/actions/projectSearchAction';

function SearchBar({ valid, projectSearchValue, onSearchChange }) {
  return (
    <div className="searchBarContainer">
      <div className="searchBar">
        <div className="searchInputContainer">
          <SearchInput value={projectSearchValue} onChange={onSearchChange} />
        </div>
        <div className="searchButtonContainer">
          <AddButton color="#fffff" disabled={!valid}>
            جستجو
          </AddButton>
        </div>
      </div>
    </div>
  );
}

SearchBar.propTypes = {
  valid: PropTypes.bool.isRequired,
  projectSearchValue: PropTypes.string.isRequired,
  onSearchChange: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  projectSearchValue: store.Home.projectSearchReducer.projectSearch,
  valid: store.Home.projectSearchReducer.valid,
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: (e) => { dispatch(projectSearchChanged(e.target.value)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
