import React from 'react';

import PropTypes from 'prop-types';

const SurveyField = ({ input, label }) => (
  <div className="row">
    <div className="input-field col s12">
      {/* Spread all input props (onBlur, onFocus etc) */}
      <input {...input} id={input.name} type={input.type} className="validate" />
      <label className="active" htmlFor={input.name}>
        {label}
      </label>
    </div>
  </div>
);

SurveyField.propTypes = {
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default SurveyField;
