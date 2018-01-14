import React from 'react';

class Header extends React.Component {
  state = {};
  render() {
    return (
      <div>
        <nav>
          <div className="nav-wrapper">
            <a href="#" className="brand-logo">
              mailmate
            </a>
            <ul id="nav-mobile" className="right">
              <li>
                <a href="/auth/google">Login</a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
