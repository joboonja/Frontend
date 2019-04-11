import React from 'react';
import PropTypes from 'prop-types';
import '../../../../../../components/SkillItem/styles.scss';
import './styles.scss';
import '../../../assets/icons/font/flaticon.css';

function BidCard() {
  return (
    <div>
      <div className="container bid">
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
    </div>
  );
}

BidCard.propTypes = {

};

export default BidCard;
