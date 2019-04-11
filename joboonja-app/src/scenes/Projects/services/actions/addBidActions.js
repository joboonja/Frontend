import { createAction, createActions } from 'redux-actions';
import Axios from '../../../../services/axios';
import { urlsConfig } from '../../../../services/axios/config';

export const { addBidReqSent, addBidReqError, addBidReqSuccess } = createActions(
  {
    ADD_BID_REQ_SENT: () => {},
    ADD_BID_REQ_ERROR: error => ({ error }),
    ADD_BID_REQ_SUCCESS: project => ({ project }),
  },
);
export function addBid(id, amount) {
  return (dispatch) => {
    dispatch(addBidReqSent(id, amount));
    Axios.post(urlsConfig.bidOnProject, { id, amount })
      .then((response) => {
        dispatch(addBidReqSuccess({ bidInfo: response.data, amount }));
      })
      .catch((error) => {
        dispatch(addBidReqError(error));
      });
  };
}

export const offerValueChange = createAction('OFFER_VALUE_CHANGE');
