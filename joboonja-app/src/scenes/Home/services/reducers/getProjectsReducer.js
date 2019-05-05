import { handleActions } from 'redux-actions';
import React from 'react';
import { toast } from 'react-toastify';
import { errors } from '../../../../services/toast/config';
import { ToastMsg } from '../../../../components/Toast';
import { projectsReqErr, projectsReqSuccess, projectsReqSent } from '../actions/getProjectsActions';

const getProjectsReducer = handleActions(
  {
    [projectsReqSent]: (state, { payload: search }) => ({
      ...state, loading: true, error: '', success: false, projects: search ? [] : state.projects,
    }),
    [projectsReqErr]: (state, { payload: error }) => {
      toast.error(<ToastMsg msg={errors.CAN_NOT_GET_PROJECTS} reason={error.toString()} />);
      return ({
        ...state, error: error.toString(), loading: false,
      });
    },
    [projectsReqSuccess]: (state, { payload: { projects, pageNumber } }) => {
      const projectsEnd = (projects.length < 10);
      return ({
        ...state,
        loading: false,
        success: true,
        projects: pageNumber === 1 ? projects : state.projects.concat(projects),
        projectsEnd,
      });
    },
  },
  {
    loading: false,
    error: '',
    success: false,
    projectsEnd: false,
    projects: [],
  },
);
export default getProjectsReducer;
