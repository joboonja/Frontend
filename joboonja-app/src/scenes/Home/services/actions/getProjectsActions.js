import { createActions } from 'redux-actions';
import Axios from '../../../../services/axios';
import { urlsConfig } from '../../../../services/axios/config';

export const { projectsReqSent, projectsReqErr, projectsReqSuccess } = createActions(
  'PROJECTS_REQ_SENT',
  'PROJECTS_REQ_ERR',
  'PROJECTS_REQ_SUCCESS',
);
export function requestForProjects(pageNumber, search = '') {
  return (dispatch) => {
    dispatch(projectsReqSent(search));
    Axios.get(urlsConfig.projects(pageNumber, search))
      .then((response) => {
        dispatch(projectsReqSuccess({ projects: response.data, pageNumber }));
      })
      .catch((error) => {
        dispatch(projectsReqErr(error));
      });
  };
}
