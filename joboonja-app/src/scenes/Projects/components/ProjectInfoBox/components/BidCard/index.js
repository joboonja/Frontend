import React from 'react';
import PropTypes from 'prop-types';
import '../../../../../../components/SkillItem/styles.scss';
import './styles.scss';
import '../../../assets/icons/font/flaticon.css';
import IconItem from '../../../../../../components/IconItem';

function BidCard({ ended }) {
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
          <input className="bidInput" maxLength="15" placeholder="پیشنهاد خود را وارد کنید" id="bidForm" />
          <label htmlFor="bidForm" className="moneyUnit">تومان</label>
        </div>
        <div className="col-auto">
          <button className="sendButton">
          ارسال
          </button>
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
  ended: PropTypes.bool,
};

BidCard.defaultProps = {
  ended: false,
};

export default BidCard;
