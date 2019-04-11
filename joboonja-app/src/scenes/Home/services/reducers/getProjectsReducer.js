import { handleActions } from 'redux-actions';
import React from 'react';
import { toast } from 'react-toastify';
import { errors } from '../../../../services/toast/config';
import { ToastMsg } from '../../../../components/Toast';
import { projectsReqErr, projectsReqSuccess, projectsReqSent } from '../actions/getProjectsActions';

const getProjectsReducer = handleActions(
  {
    [projectsReqSent]: state => ({
      ...state, loading: true, error: '', success: false, skills: [],
    }),
    [projectsReqErr]: (state, { payload: error }) => {
      toast.error(<ToastMsg msg={errors.CAN_NOT_GET_PROJECTS} reason={error.toString()} />);
      return ({
        ...state, error: error.toString(), loading: false,
      });
    },
    [projectsReqSuccess]: (state, { payload: projects }) => ({
      ...state, loading: false, success: true, projects,
    }),
  },
  {
    loading: false,
    error: '',
    success: false,
    projects: [],
  },
);
export default getProjectsReducer;