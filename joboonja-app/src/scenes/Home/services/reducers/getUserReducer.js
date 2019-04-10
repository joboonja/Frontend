import { handleActions } from 'redux-actions';
import React from 'react';
import { toast } from 'react-toastify';
import { errors } from '../../../../services/toast/config';
import { ToastMsg } from '../../../../components/Toast';
import { usersReqErr, usersReqSuccess, usersReqSent } from '../actions/getUsersAction';


const getAllSkillsReducer = handleActions(
  {
    [usersReqSent]: state => ({
      ...state, loading: true, error: '', success: false, skills: [],
    }),
    [usersReqErr]: (state, { payload: error }) => {
      toast.error(<ToastMsg msg={errors.CAN_NOT_GET_USERS} reason={error.toString()} />);
      return ({
        ...state, error: error.toString(), loading: false,
      });
    },
    [usersReqSuccess]: (state, { payload: users }) => ({
      ...state, loading: false, success: true, users,
    }),
  },
  {
    loading: false,
    error: '',
    success: false,
    users: [],
  },
);
export default getAllSkillsReducer;
