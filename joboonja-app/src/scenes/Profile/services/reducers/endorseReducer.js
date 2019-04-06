import { handleActions } from 'redux-actions';
import React from 'react';
import { toast } from 'react-toastify';
import { errors, successes } from '../../../../services/toast/config';
import { ToastMsg } from '../../../../components/Toast';
import {
  endorseReqSuccess, endorseReqSent, endorseReqError,
} from '../actions/endorseActions';


const endorseReducer = handleActions(
  {
    [endorseReqSent]: state => ({
      ...state, loading: true, error: '', success: false,
    }),
    [endorseReqError]: (state, { payload: { error, skillName } }) => {
      toast.error(
        <ToastMsg msg={errors.CAN_NOT_ENDORSE_SKILL(skillName)} reason={error.toString()} />,
      );
      return ({
        ...state, error: error.toString(), loading: false,
      });
    },
    [endorseReqSuccess]: (state, { payload: { skillName } }) => {
      toast.success(<ToastMsg msg={successes.ENDORSE_SKILL(skillName)} />);
      return ({
        ...state, loading: false, success: true,
      });
    },
  },
  {
    loading: false,
    error: '',
    success: false,
  },
);
export default endorseReducer;
