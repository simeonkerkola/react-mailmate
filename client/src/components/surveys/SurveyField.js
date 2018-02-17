import React from 'react';

import PropTypes from 'prop-types';

const SurveyField = ({
  input, label, fieldType, meta: { error, touched },
}) => (
  <div className="row">
    <div className="input-field col s12">
      <label className="active" htmlFor={input.name}>
        {label}
      </label>
      {fieldType === 'input' ? (
        <input
          {...input}
          id={input.name}
          type={input.type}
          className="validate"
          style={{ marginBottom: '.5rem' }}
        />
      ) : (
        <div>
          <textarea
            {...input}
            id={input.name}
            type={input.type}
            className="validate materialize-textarea"
            style={{ marginBottom: '.5rem' }}
          />
        </div>
      )}
      {/* Spread all input props (onBlur, onFocus etc) */}

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
