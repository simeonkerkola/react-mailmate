import React from 'react';
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
export default SurveyNew;
