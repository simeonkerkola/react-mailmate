import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Header from './Header';

const Dashboard = () => <h2>Dashboard</h2>;
const SurveyNew = () => <h2>SurveyNew</h2>;
const Landing = () => <h2>Landing</h2>;

const App = () => (
  <div>
    <BrowserRouter>
      <div className="container">
        <Header />
        <Route path="/" component={Landing} exact />
        <Route path="/surveys" component={Dashboard} exact />
        <Route path="/surveys/new" component={SurveyNew} />
      </div>
    </BrowserRouter>
  </div>
);

export default App;
