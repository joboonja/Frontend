import React from 'react';
import PropTypes from 'prop-types';
import '../../../../components/Inputs/SimpleInput/styles.scss';

function RegisterField({
  error, placeholder, type, onChange, colClassName, value, labelText, isUsername, canBeEmpty,
}) {
  return (
    <div className={colClassName}>
      <label>{labelText}</label>
      <div className={isUsername ? 'input-group' : ''}>
        {isUsername ? (
          <div className="input-group-prepend">
            <span className="input-group-text username-badge">@</span>
          </div>
        ) : <div />}
        <input
          type={type}
          className={error ? 'form-control is-invalid' : 'form-control'}
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        {error
          ? (
            <div>
              <p className="sampleInputError">{error}</p>
            </div>
          )
          : null}
      </div>
    </div>
  );
}

RegisterField.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.string,
  colClassName: PropTypes.string,
  labelText: PropTypes.string,
  isUsername: PropTypes.bool,
  canBeEmpty: PropTypes.bool,
};

RegisterField.defaultProps = {
  error: '',
  placeholder: null,
  colClassName: '',
  labelText: '',
  type: 'text',
  onChange: null,
  className: '',
  value: null,
  isUsername: false,
  canBeEmpty: false,
};

export default RegisterField;
