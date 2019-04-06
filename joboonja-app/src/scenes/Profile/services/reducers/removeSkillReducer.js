import { handleActions } from 'redux-actions';
import React from 'react';
import { toast } from 'react-toastify';
import { removeSkillError, removeSkillSuccess, removeSkillSent } from '../actions/removeSkillActions';
import { errors } from '../../../../services/toast/config';
import { ToastMsg } from '../../../../components/Toast';


const removeSkillReducer = handleActions(
  {
    [removeSkillSent]: state => ({
      ...state, loading: true, success: false, error: '',
    }),
    [removeSkillError]: (state, { payload: { error, skill } }) => {
      toast.error(
        <ToastMsg
          msg={errors.CAN_NOT_REMOVE_SKILL(skill.name)}
          reason={error.toString()}
        />,
      );
      return ({
        ...state, error: error.toString(), loading: false,
      });
    },
    [removeSkillSuccess]: state => ({
      ...state, loading: false, success: true,
    }),
  },
  {
    loading: false,
    error: '',
    success: false,
  },
);
export default removeSkillReducer;
