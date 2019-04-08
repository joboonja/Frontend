import React from 'react';
import Card from '../../../../../../components/Card';
import './styles.scss';

const cardStyle = {
  width: '100%',
  padding: '3px',
};

function SearchUser() {
  return (
    <div style={{ marginBottom: '15px' }}>
      <Card style={cardStyle} hoverable>
        <input className="searchUser" placeholder="جستجوی نام کاربر" />
      </Card>
    </div>
  );
}

export default SearchUser;
