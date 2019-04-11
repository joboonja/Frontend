import { createActions } from 'redux-actions';

export const { usernameChanged, passwordChanged } = createActions(
  'USERNAME_CHANGED',
  'PASSWORD_CHANGED',
);
