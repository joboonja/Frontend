import React from 'react';
/* eslint-disable react/prop-types */
import { Route } from 'react-router-dom';
import ProjectBid from './scenes/ProjectBid';

export default function ProjectRoute({ match }) {
  return (
    <div>
      <Route
        path={`${match.path}/:id`}
        render={({ match: { params: { id } } }) => <ProjectBid id={id} />}
      />
    </div>
  );
}
