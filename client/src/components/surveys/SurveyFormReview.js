import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = ({ onCancel, formValues }) => (
  <div>
    <h4>Please confirm your entries</h4>
    <h5>{formValues.title}</h5>
    <p>Subject: {formValues.subject}</p>
    <p>Email BoDy{formValues.body}</p>
    <p>Emails: {formValues.emails}</p>
    <p />
    <button onClick={onCancel} className="red btn-flat left white-text">
      back
    </button>
    <button className="green btn-flat right white-text">submit</button>
  </div>
);

const mapStateToProps = state => ({
  formValues: state.form.surveyForm.values,
});

export default connect(mapStateToProps)(SurveyFormReview);
