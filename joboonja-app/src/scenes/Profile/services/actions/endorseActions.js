import { createActions } from 'redux-actions';
import Axios from '../../../../services/axios';
import { urlsConfig } from '../../../../services/axios/config';

export const { endorseReqSent, endorseReqError, endorseReqSuccess } = createActions(
  'ENDORSE_REQ_SENT',
  'ENDORSE_REQ_ERROR',
  'ENDORSE_REQ_SUCCESS',
);

export function requestForEndorse(userId, skillName) {
  return (dispatch) => {
    dispatch(endorseReqSent({ skillName, userId }));
    Axios.post(urlsConfig.endorse(userId), { skillName })
      .then((response) => {
        dispatch(endorseReqSuccess({ skills: response.data, skillName }));
      })
      .catch((error) => {
        dispatch(endorseReqError({ error, skillName }));
      });
  };
}
