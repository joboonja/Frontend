/* eslint-disable no-nested-ternary */
import React from 'react';

function RegisterCheckBox() {
  return (
    <div className="col-lg-5 col-md-8">
      <div className="form-group">
        <div className="form-check">
          <input type="checkbox" />
          <label className="form-check-label formCheckBoxLabel">
                        تمامی شرایط و قوانین جاب‌اونجا را می‌پذیرم.
          </label>
        </div>
      </div>
    </div>
  );
}

export default RegisterCheckBox;
