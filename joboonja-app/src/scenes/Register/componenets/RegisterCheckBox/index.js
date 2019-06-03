/* eslint-disable no-nested-ternary,jsx-a11y/label-has-associated-control,jsx-a11y/label-has-for */
import React from 'react';
import PropTypes from 'prop-types';

function RegisterCheckBox({ onClick }) {
  return (
    <div className="col-lg-5 col-md-8">
      <div className="form-group">
        <div className="form-check">
          <input type="checkbox" onClick={onClick} />
          <label className="form-check-label formCheckBoxLabel">
                        تمامی شرایط و قوانین جاب‌اونجا را می‌پذیرم.
          </label>
        </div>
      </div>
    </div>
  );
}


RegisterCheckBox.propTypes = {
  onClick: PropTypes.func.isRequired,
};

export default RegisterCheckBox;
