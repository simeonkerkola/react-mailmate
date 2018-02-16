import React from 'react';
import { reduxForm } from 'redux-form';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends React.Component {
  state = {
    showFormReview: false,
  };
  readyForReview = () => {
    this.setState(() => ({ showFormReview: true }));
  };
  notReadyForReview = () => {
    this.setState(() => ({ showFormReview: false }));
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <h3>New Survey</h3>
        <div className="container">
          {this.state.showFormReview ? (
            <SurveyFormReview onCancel={this.notReadyForReview} />
          ) : (
            <SurveyForm onSurveySubmit={this.readyForReview} />
          )}
        </div>
      </div>
    );
  }
}

// SurveyNew default destroyOnUnmount is true
// So all old form values are dumped when user clicks cancel, or create new
export default reduxForm({
  form: 'surveyForm',
})(SurveyNew);
