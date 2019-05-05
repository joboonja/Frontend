import { createAction } from 'redux-actions';
import { requestForProjects } from './getProjectsActions';

export const projectValueChanged = createAction('PROJECT_VALUE_CHANGED');

export function projectSearchChanged(projectValue) {
  return (dispatch) => {
    if (!projectValue) dispatch(requestForProjects(1));
    dispatch(projectValueChanged(projectValue));
  };
}
