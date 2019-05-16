import React from 'react';
/* eslint-disable react/prop-types */
import { Route } from 'react-router-dom';
import Profile from './scenes/Profile';


export default function ProfileRoute({ match }) {
  const selfId = localStorage.getItem('username');
  return (
    <div>
      <Route
        path={`${match.path}/:id`}
        render={({ match: { params: { id } } }) => <Profile id={id} isSelf={id === selfId} />}
      />
      <Route
        exact
        path={match.path}
        render={() => <Profile id={selfId} isSelf />}
      />
    </div>
  );
}
