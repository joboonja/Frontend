import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';
import { connect } from 'react-redux';
import AddButton from '../../../../../../components/Buttons/AddButton';
import SearchInput from './components/SearchInput';
import { projectSearchChanged } from '../../../../services/actions/projectSearchAction';
import { requestForProjects } from '../../../../services/actions/getProjectsActions';

function SearchBar({
  valid, projectSearchValue, onSearchChange, search,
}) {
  return (
    <div className="searchBarContainer">
      <div className="searchBar">
        <div className="searchInputContainer">
          <SearchInput value={projectSearchValue} onChange={onSearchChange} />
        </div>
        <div className="searchButtonContainer">
          <AddButton color="#fffff" disabled={!valid} onClick={() => search(projectSearchValue)}>
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
  search: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  projectSearchValue: store.Home.projectSearchReducer.projectSearch,
  valid: store.Home.projectSearchReducer.valid,
});

const mapDispatchToProps = dispatch => ({
  onSearchChange: (e) => { dispatch(projectSearchChanged(e.target.value)); },
  search: (search) => { dispatch(requestForProjects(1, search)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
