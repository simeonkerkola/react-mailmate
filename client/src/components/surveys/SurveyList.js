import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchSurveys } from '../../actions';

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }
  renderSurveys() {
    const barStyle = {
      whiteSpace: 'nowrap',
      minWidth: '1%',
      maxWidth: '100%',
      padding: '5px',
    };
    return this.props.surveys.reverse().map((survey) => {
      const answersTotal = survey.positive + survey.negative;
      const percentagePositive = Math.floor(survey.positive / answersTotal * 100) || 0;
      const percentageNegative = Math.floor(survey.negative / answersTotal * 100) || 0;
      return (
        <div className="col s12" key={survey._id}>
          <div className="card" style={{ minWidth: '400px' }}>
            <div className="card-content">
              <span className="card-title">{survey.title}</span>
              <span className="right">
                Sent on: {new Date(survey.dateSent).toLocaleDateString()}
              </span>
            </div>
            <div className="card-tabs">
              <ul className="tabs tabs-fixed-width">
                <li className="tab">
                  <a className="active" href={`#${survey._id}-tab1`}>
                    Stats
                  </a>
                </li>
                <li className="tab">
                  <a href={`#${survey._id}-tab2`}>Content</a>
                </li>
              </ul>
            </div>
            <div className="card-content grey lighten-4" style={{ fontSize: '1.1rem' }}>
              <div id={`${survey._id}-tab1`}>
                <div className="row">
                  <div className="col s12">
                    <h5 className="center" style={{ padding: '10px' }}>
                      Total Answers: {answersTotal}
                    </h5>
                  </div>
                </div>

                <div className="row">
                  <div className="col s4 m3">
                    <p style={barStyle}>Positive: {survey.positive}</p>
                  </div>
                  <div
                    className="col s8 m9"
                    style={{ borderRight: '1px solid #90a4ae', paddingRight: '0' }}
                  >
                    <p
                      className="lime lighten-2"
                      style={{ ...barStyle, width: `${percentagePositive}%` }}
                    >
                      {percentagePositive}%
                    </p>
                  </div>
                </div>

                <div className="row">
                  <div className="col s4 m3">
                    <p style={barStyle}>Negative: {survey.negative}</p>
                  </div>
                  <div
                    className="col s8 m9"
                    style={{ borderRight: '1px solid #90a4ae', paddingRight: '0' }}
                  >
                    <p
                      className="orange lighten-2 "
                      style={{ ...barStyle, width: `${percentageNegative}%` }}
                    >
                      {percentageNegative}%
                    </p>
                  </div>
                </div>

                {survey.dateLastResponded && (
                  <div className="row">
                    <div className="col s12 center">
                      Last Responded: {new Date(survey.dateLastResponded).toLocaleDateString()}
                    </div>
                  </div>
                )}
              </div>

              <div id={`${survey._id}-tab2`}>
                <h5>{survey.subject}</h5>
                <p>{survey.body}</p>
              </div>
            </div>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div className="row" style={{ fontSize: '100%' }}>
        {this.renderSurveys()}
        {console.log(this.props)}
      </div>
    );
  }
}

const mapStateToProps = ({ surveys }) => ({
  surveys,
});

export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
