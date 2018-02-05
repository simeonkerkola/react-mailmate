import React from 'react';
import SurveyForm from './SurveyForm';

class SurveyNew extends React.Component {
  render() {
    return (
      <div>
        <h3>New Survey</h3>
        <div className="container">
          <SurveyForm />
        </div>
      </div>
    );
  }
}
export default SurveyNew;
