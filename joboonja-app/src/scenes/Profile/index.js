import React from 'react';
/* eslint-disable react/prop-types */
import { Route } from 'react-router-dom';
import Profile from './scenes/Profile';

const selfId = '1';

export default function ProfileRoute({ match }) {
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
