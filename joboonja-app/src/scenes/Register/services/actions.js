import { createActions } from 'redux-actions';

export const
  {
    regUsernameChanged, regPasswordChanged, regRepeatedChanged,
    regFirstNameChanged, regLastNameChanged, regImgLinkChanged, regJobChanged,
  } = createActions(
    'REG_USERNAME_CHANGED',
    'REG_PASSWORD_CHANGED',
    'REG_REPEATED_CHANGED',
    'REG_FIRST_NAME_CHANGED',
    'REG_LAST_NAME_CHANGED',
    'REG_IMG_LINK_CHANGED',
    'REG_JOB_CHANGED',
  );
