import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types';

const InputCheckboxGroup = ({
  name,
  placeholder,
  value,
  error,
  info,
  onChange,
  disabled
}) => {
  return (
    <div className="form-group">
      <input
        className={classnames('form-control form-control-sm', {
          'is-invalid': error
        })}
        placeholder={placeholder}
        name={name}
        checked={value}
        type="checkbox"
        onChange={onChange}
        disabled={disabled}
      />
      {info && <small className="form-text text-muted">{info}</small>}
      {error && <div className="invalid-feedback">{error}</div>}
    </div>
  );
};

InputCheckboxGroup.propTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string.isRequired,
  info: PropTypes.string,
  error: PropTypes.string,
  onChange: PropTypes.func.isRequired,
  disabled: PropTypes.string
};

export default InputCheckboxGroup;
