import { handleActions } from 'redux-actions';
import React from 'react';
import { toast } from 'react-toastify';
import { errors, successes } from '../../../../services/toast/config';
import { ToastMsg } from '../../../../components/Toast';
import {
  addBidReqSuccess, addBidReqSent, addBidReqError, offerValueChange,
} from '../actions/addBidActions';

const addBidReducer = handleActions(
  {
    [addBidReqSent]: state => ({
      ...state, loading: true, error: '', success: false, amount: '',
    }),
    [addBidReqError]: (state, { payload: error }) => {
      toast.error(<ToastMsg msg={errors.CAN_NOT_ADD_BID} reason={error.toString()} />);
      return ({
        ...state, error: error.toString(), loading: false,
      });
    },
    [addBidReqSuccess]: (state, { payload: { amount } }) => {
      toast.success(<ToastMsg msg={successes.ADD_BID(amount)} />);
      return ({
        ...state, loading: false, success: true,
      });
    },
    [offerValueChange]: (state, { payload: amountValue }) => ({
      ...state, amount: amountValue, valid: amountValue !== '' && amountValue > 0,
    }),
  },
  {
    loading: false,
    error: '',
    success: false,
    amount: '',
    valid: false,
  },
);
export default addBidReducer;
