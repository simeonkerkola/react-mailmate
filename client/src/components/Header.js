import React from 'react';

export default class Header extends React.Component {
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
