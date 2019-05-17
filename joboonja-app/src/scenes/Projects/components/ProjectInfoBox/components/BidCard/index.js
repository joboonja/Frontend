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
  ended, hasBid, id, loading, amount, onOfferValueChange, valid, addBidForProject,
}) {
  const cannotBid = (
    <div className="iconItem">
      <div className="row">
        <div className={ended ? 'alreadyBidIcon deadlinePassed col-auto' : 'alreadyBidIcon col-auto'}>
          <IconItem type={ended ? 'cannotBid' : 'alreadyHas'} text="" textTitle="" />
        </div>
        {ended ? (
          <div className="alreadyBidText deadlinePassed col-auto">
              مهلت ارسال پیشنهاد برای این پروژه به پایان رسیده
              است!
          </div>
        ) : <div className="alreadyBidText col-auto">شما قبلا پیشنهاد خود را ثبت کرده‌اید.</div>
          }
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
            type="number"
            className="bid"
            min={0}
            // onKeyPress="if(this.value.length==15) return false;"
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
                addBidForProject(id, amount);
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
        {ended || hasBid ? cannotBid : stillCanBid
            }
      </div>
    </div>
  );
}

BidCard.propTypes = {
  id: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  ended: PropTypes.bool,
  hasBid: PropTypes.bool,
  onOfferValueChange: PropTypes.func.isRequired,
  loading: PropTypes.bool.isRequired,
  valid: PropTypes.bool.isRequired,
  addBidForProject: PropTypes.func.isRequired,
};

BidCard.defaultProps = {
  ended: false,
  hasBid: false,
};


const mapStateToProps = store => ({
  loading: store.Project.addBidReducer.loading,
  amount: store.Project.addBidReducer.amount,
  valid: store.Project.addBidReducer.valid,
  hasBid: store.Project.getProjectReducer.project.hasBidOrNot,
});

const mapDispatchToProps = dispatch => ({
  addBidForProject: (id, amount) => { dispatch(addBid(id, amount)); },
  onOfferValueChange: (amount) => { dispatch(offerValueChange(amount)); },
});

export default connect(mapStateToProps, mapDispatchToProps)(BidCard);
