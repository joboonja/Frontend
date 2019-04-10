import { createActions } from 'redux-actions';
import Axios from '../../../../services/axios';
import { urlsConfig } from '../../../../services/axios/config';

export const { projectReqSent, projectReqError, projectReqSuccess } = createActions(
  {
    PROJECT_REQ_SENT: () => {},
    PROJECT_REQ_ERROR: error => ({ error }),
    PROJECT_REQ_SUCCESS: project => ({ project }),
  },
);
export function requestForProject(id) {
  return (dispatch) => {
    dispatch(projectReqSent());
    Axios.get(urlsConfig.getProject(id))
      .then((response) => {
        dispatch(projectReqSuccess(response.data));
      })
      .catch((error) => {
        dispatch(projectReqError(error));
      });
  };
}
