import { createActions } from 'redux-actions';
import Axios from '../../../services/axios';
import { urlsConfig } from '../../../services/axios/config';

export const
  {
    regUsernameChanged, regPasswordChanged, regRepeatedChanged,
    regFirstNameChanged, regLastNameChanged, regImgLinkChanged, regJobChanged,
    regDescriptionChanged, regCheckBoxChanged, regReqSent, regReqSuccess, regReqError, regReset,
  } = createActions(
    'REG_USERNAME_CHANGED',
    'REG_PASSWORD_CHANGED',
    'REG_REPEATED_CHANGED',
    'REG_FIRST_NAME_CHANGED',
    'REG_LAST_NAME_CHANGED',
    'REG_IMG_LINK_CHANGED',
    'REG_JOB_CHANGED',
    'REG_DESCRIPTION_CHANGED',
    'REG_CHECK_BOX_CHANGED',
    'REG_REQ_SENT',
    'REG_REQ_SUCCESS',
    'REG_REQ_ERROR',
    'REG_RESET',
  );

export function addUser(username, firstName, lastName, password, jobTitle, profilePictureUrl, bio) {
  return (dispatch) => {
    dispatch(regReqSent());
    Axios.post(urlsConfig.signup, {
      username, firstName, lastName, password, jobTitle, profilePictureUrl, bio,
    })
      .then(() => {
        dispatch(regReqSuccess());
      })
      .catch((error) => {
        dispatch(regReqError(error));
      });
  };
}
