import React from 'react';

import PropTypes from 'prop-types';

const SurveyField = ({ input, label, meta: { error, touched } }) => (
  <div className="row">
    <div className="input-field col s12">
      <label className="active" htmlFor={input.name}>
        {label}
      </label>
      {/* Spread all input props (onBlur, onFocus etc) */}
      <input
        {...input}
        id={input.name}
        type={input.type}
        className="validate"
        style={{ marginBottom: '.5rem' }}
      />

      <div className="red-text" style={{ marginBottom: '2rem' }}>
        {touched && error}
      </div>
    </div>
  </div>
);

SurveyField.propTypes = {
  label: PropTypes.string.isRequired,
  input: PropTypes.objectOf(PropTypes.any).isRequired,
};

export default SurveyField;
