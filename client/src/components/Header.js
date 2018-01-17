import React from 'react';
import { connect } from 'react-redux';

class Header extends React.Component {
  renderContent = () => {
    return this.props.auth ? (
      <a href="/api/logout">Logout</a>
    ) : (
      <a href="/auth/google">Login</a>
    );
  };
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a
              href="/"
              className="brand-logo"
              style={{ paddingLeft: '.75rem' }}>
              mailmate
            </a>
            <ul id="nav-mobile" className="right">
              <li>{this.renderContent()}</li>
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
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
