import React from 'react';
import SurveyForm from './SurveyForm';
import SurveyFormReview from './SurveyFormReview';

class SurveyNew extends React.Component {
  state = {
    showFormReview: false,
  };
  onReadyForReview = () => {
    this.setState(() => ({ showFormReview: true }));
  };
  render() {
    console.log(this.state);
    return (
      <div>
        <h3>New Survey</h3>
        <div className="container">
          {this.state.showFormReview ? (
            <SurveyFormReview on={this.onReadyForReview} />
          ) : (
            <SurveyForm onSurveySubmit={this.onReadyForReview} />
          )}
        </div>
      </div>
    );
  }
}
export default SurveyNew;
