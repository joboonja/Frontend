import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Card from '../../../../../../components/Card';
import './styles.scss';
import { userSearchChanged } from '../../../../services/actions/userSearchAction';

const cardStyle = {
  width: '100%',
  padding: '3px',
};

function SearchUser({
  onUserَSearchChange, userSearchValue,
}) {
  return (
    <div style={{ padding: '5px' }}>
      <Card style={cardStyle} hoverable>
        <input className="searchUser" placeholder="جستجوی نام کاربر" onChange={onUserَSearchChange} value={userSearchValue} />
      </Card>
    </div>
  );
}

SearchUser.propTypes = {
  userSearchValue: PropTypes.string.isRequired,
  onUserَSearchChange: PropTypes.func.isRequired,
};

const mapStateToProps = store => ({
  userSearchValue: store.Home.userSearchReducer.userSearch,
});

const mapDispatchToProps = dispatch => ({
  onUserَSearchChange: (e) => { dispatch(userSearchChanged(e.target.value)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchUser);
