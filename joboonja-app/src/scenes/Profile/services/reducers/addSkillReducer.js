import { handleActions } from 'redux-actions';
import React from 'react';
import { toast } from 'react-toastify';
import { errors, successes } from '../../../../services/toast/config';
import { ToastMsg } from '../../../../components/Toast';
import {
  addSkillReqSuccess, addSkillReqSent, addSkillReqError, skillValueChange,
} from '../actions/addSkillAction';


const addSkillReducer = handleActions(
  {
    [addSkillReqSent]: state => ({
      ...state, loading: true, error: '', success: false, skill: '',
    }),
    [addSkillReqError]: (state, { payload: { error, skillName } }) => {
      toast.error(<ToastMsg msg={errors.CAN_NOT_ADD_SKILL(skillName)} reason={error.toString()} />);
      return ({
        ...state, error: error.toString(), loading: false,
      });
    },
    [addSkillReqSuccess]: (state, { payload: { skillName } }) => {
      toast.success(<ToastMsg msg={successes.ADD_SKILL(skillName)} />);
      return ({
        ...state, loading: false, success: true,
      });
    },
    [skillValueChange]: (state, { payload: skillValue }) => ({
      ...state, skill: skillValue,
    }),
  },
  {
    loading: false,
    error: '',
    success: false,
    skill: '',
  },
);
export default addSkillReducer;
