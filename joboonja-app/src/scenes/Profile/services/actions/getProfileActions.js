import { createActions } from 'redux-actions';
import Axios from '../../../../services/axios';
import { urlsConfig } from '../../../../services/axios/config';

export const { profileReqSent, profileReqError, profileReqSuccess } = createActions('PROFILE_REQ_SENT',
  {
    PROFILE_REQ_ERROR: error => ({ error }),
    PROFILE_REQ_SUCCESS: profile => ({ profile }),
  });

export function requestForProfile(id) {
  return (dispatch) => {
    dispatch(profileReqSent());
    Axios.get(urlsConfig.getProfile(id))
      .then((response) => {
        dispatch(profileReqSuccess(response));
      })
      .catch((error) => {
        dispatch(profileReqError(error));
      });
  };
}
