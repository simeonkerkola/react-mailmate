import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import Payments from './Payments';

class Header extends React.Component {
  renderContent = () => {
    if (this.props.auth) {
      return [
        <li key="payments">
          <Payments />
        </li>,
        <li key="credits" style={{ margin: '0 10px' }}>
          Credits: {this.props.auth.credits}
        </li>,
        <li key="logout">
          <a href="/api/logout">Logout</a>
        </li>,
      ];
    } else if (this.props.auth === null) return undefined;
    return (
      <li key="login">
        <a href="/auth/google">Login</a>
      </li>
    );
  };

  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link
              to={this.props.auth ? '/surveys' : '/'}
              className="brand-logo"
              style={{ paddingLeft: '.75rem' }}
            >
              mailmate
            </Link>
            <ul id="nav-mobile" className="right">
              {this.renderContent()}
              {console.log(this.props.auth)}
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

const mapStateToProps = ({ auth }) => ({
  auth,
});

export default connect(mapStateToProps)(Header);
