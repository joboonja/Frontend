import React from 'react';
import PropTypes from 'prop-types';
import '../../../../../../components/SkillItem/styles.scss';
import './styles.scss';
import '../../../assets/icons/font/flaticon.css';
import { connect } from 'react-redux';
import IconItem from '../../../../../../components/IconItem';
import AddButton from '../../../../../../components/Buttons/AddButton';
import { addBid, offerValueChange } from '../../../../services/actions/addBidActions';

function BidCard({
  ended, id, loading, amount, onOfferValueChange, valid,
}) {
  const endedBid = (
    <div className="iconItem">
      <div className="row">
        <div className="alreadyBidIcon deadlinePassed col-auto">
          <IconItem type="cannotBid" text="" textTitle="" />
        </div>
        <div className="alreadyBidText deadlinePassed col-auto">
مهلت ارسال پیشنهاد برای این پروژه به پایان رسیده
          است!
        </div>
      </div>
    </div>
  );
  const stillCanBid = (
    <div>
      {' '}
      <div className="bidTitle">
        <h5>
      ثبت پیشنهاد
        </h5>
      </div>
      <form className="row">
        <div className="col-auto">
          <input
            className="bid"
            type="tel"
            min={0}
            maxLength={15}
            placeholder="پیشنهاد خود را وارد کنید"
            id="bidForm"
            onChange={e => onOfferValueChange(e.target.value)}
            value={amount}
          />
          <label htmlFor="bidForm" className="moneyUnit">تومان</label>
        </div>
        <div className="col-auto">
          <div className="sendButton">
            <AddButton
              onClick={() => {
                if (amount) {
                  addBid(id, amount);
                }
              }}
              loading={loading}
              disabled={!valid}
            >
                    ارسال
            </AddButton>
          </div>

        </div>

      </form>
    </div>
  );
  return (
    <div>
      <div className="container bid">
        {ended ? endedBid : stillCanBid
            }
      </div>
    </div>
  );
}

BidCard.propTypes = {
  id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  ended: PropTypes.bool,
  onOfferValueChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
};

BidCard.defaultProps = {
  ended: false,
};


const mapStateToProps = store => ({
  loading: store.Project.addBidReducer.loading,
  amount: store.Project.addBidReducer.amount,
  valid: store.Project.addBidReducer.valid,
});

const mapDispatchToProps = dispatch => ({
  addBid: (id, amount) => { dispatch(addBid(id, amount)); },
  onOfferValueChange: (amount) => { dispatch(offerValueChange(amount)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(BidCard);
