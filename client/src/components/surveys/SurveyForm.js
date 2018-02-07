import React from 'react';
import { reduxForm, Field } from 'redux-form';
import { Link } from 'react-router-dom';
import SurveyField from './SurveyField';

const FIELDS = [
  { label: 'Survey Title', name: 'title' },
  { label: 'Subject', name: 'subject' },
  { label: 'Email Body', name: 'body' },
  { label: 'Recipient List', name: 'emails' },
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
    //     name="title"
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

// If Redux Form gets an empty object back it assumes that the entire form is valid
const validate = (values) => {
  const errors = {};

  FIELDS.forEach(({ name }) => {
    if (!values[name]) errors[name] = 'This field is required';
  });
  console.log(values);
  return errors;
};

// reduxForm is wired up same as connect()
// Adds some additional props for us to use like handleSubmit()
export default reduxForm({
  validate,
  form: 'surveyForm',
})(SurveyForm);
