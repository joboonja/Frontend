import { handleActions } from 'redux-actions';
import React from 'react';
import { toast } from 'react-toastify';
import { errors, successes } from '../../../../services/toast/config';
import { ToastMsg } from '../../../../components/Toast';
import { allSkillsReqErr, allSkillsReqSuccess, allSkillsReqSent } from '../actions/getAllSkillsActions';

const getAllSkillsReducer = handleActions(
  {
    [allSkillsReqSent]: state => ({
      ...state, loading: true, error: '', success: false, skills: [],
    }),
    [allSkillsReqErr]: (state, { payload: error }) => {
      toast.error(<ToastMsg msg={errors.CAN_NOT_GET_ALL_SKILLS} reason={error.toString()} />);
      return ({
        ...state, error: error.toString(), loading: false,
      });
    },
    [allSkillsReqSuccess]: (state, { payload: { skills } }) => ({
      ...state, loading: false, success: true, skills,
    }),
  },
  {
    loading: false,
    error: '',
    success: false,
    skills: [],
  },
);
export default getAllSkillsReducer;
