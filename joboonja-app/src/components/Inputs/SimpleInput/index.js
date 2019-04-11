import React from 'react';
import PropTypes from 'prop-types';
import './styles.scss';

function SampleInput({
  error, placeholder, type, onChange, className, value,
}) {
  return (
    <div className={className}>
      <div className="row">
        <input
          type={type}
          className="sampleInput"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
      </div>
      {error
        ? (
          <div className="row">
            <p className="sampleInputError">{error}</p>
          </div>
        )
        : null}

    </div>
  );
}

SampleInput.propTypes = {
  error: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  onChange: PropTypes.func,
  className: PropTypes.string,
  value: PropTypes.string,
};

SampleInput.defaultProps = {
  error: '',
  placeholder: null,
  type: 'input',
  onChange: null,
  className: '',
  value: null,
};

export default SampleInput;
