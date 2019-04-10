import { createActions } from 'redux-actions';
import Axios from '../../../../services/axios';
import { urlsConfig } from '../../../../services/axios/config';

export const { projectsReqSent, projectsReqErr, projectsReqSuccess } = createActions(
  'PROJECTS_REQ_SENT',
  'PROJECTS_REQ_ERR',
  'PROJECTS_REQ_SUCCESS',
);
export function requestForProjects() {
  return (dispatch) => {
    dispatch(projectsReqSent());
    Axios.get(urlsConfig.projects)
      .then((response) => {
        dispatch(projectsReqSuccess(response.data));
      })
      .catch((error) => {
        dispatch(projectsReqErr(error));
      });
  };
}
