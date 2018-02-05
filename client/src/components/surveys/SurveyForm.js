import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
  { label: 'Survey Title', name: 'surveyTitle' },
  { label: 'Subject', name: 'subject' },
  { label: 'Email Body', name: 'emailBody' },
  { label: 'Recipient List', name: 'recipientList' },
];

class SurveyForm extends React.Component {
  renderFields() {
    return FIELDS.map(({ label, name }) => (
      <Field component={SurveyField} label={label} name={name} type="text" key={name} />
    ));
    // <div>
    //   <Field
    //     component={SurveyField}
    //     label="Survey Title"
    //     name="surveyTitle"
    //     type="text"
    //   />
    // </div>
  }

  render() {
    return (
      <div className="row">
        <form
          onSubmit={this.props.handleSubmit(values => console.log(values))}
          className="col s12"
        >
          {this.renderFields()}
          {/* <SurveyField label="Survey Title" id="survey_title" inputType="text" />
          <SurveyField type="input" label="Subject" id="subject" inputType="text" />
          <SurveyField label="Email Body" id="email-body" inputType="text" />
          <SurveyField label="Recipient List" id="recipient-list" inputType="text" /> */}
          <button className="teal btn-flat right white-text">Next</button>
          <Link to="/surveys">
            <button className="red btn-flat left white-text">cancel</button>
          </Link>
        </form>
      </div>
    );
  }
}

// reduxForm is wired up same as connect()
// Adds some additional props for us to use like handleSubmit()
export default reduxForm({
  form: 'surveyForm',
})(SurveyForm);
