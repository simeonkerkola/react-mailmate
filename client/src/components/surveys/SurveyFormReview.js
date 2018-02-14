import React from 'react';
import { connect } from 'react-redux';
import formFields from './formFields';

const SurveyFormReview = ({ onCancel, formValues }) => {
  const renderFields = () =>
    formFields.map(({ label, name }) => (
      <div>
        <label htmlFor={name}>{label}</label>
        <div id={name}>{formValues[name]}</div>
      </div>
    ));
  return (
    <div>
      <h4>Please confirm your entries</h4>
      {renderFields()}
      <button onClick={onCancel} className="yellow darken-3 btn-flat left white-text">
        back
      </button>
      <button className="green btn-flat right white-text">submit</button>
    </div>
  );
};

// Our form's state state.form, and auth state would be: state.auth
const mapStateToProps = state => ({
  formValues: state.form.surveyForm.values,
});

export default connect(mapStateToProps)(SurveyFormReview);
