import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import formFields from './formFields';
import * as actions from '../../actions';

const SurveyFormReview = ({
  onCancel, formValues, submitSurvey, history,
}) => {
  const renderFields = () =>
    formFields.map(({ label, name }) => (
      <div key={name}>
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
      <button
        onClick={() => {
          submitSurvey(formValues, history);
        }}
        className="green btn-flat right white-text"
      >
        Send Survey
      </button>
    </div>
  );
};

// Our form's state state.form, and auth state would be: state.auth
const mapStateToProps = state => ({
  formValues: state.form.surveyForm.values,
});

// history object provided by withRouter
export default withRouter(connect(mapStateToProps, actions)(SurveyFormReview));
