import React from 'react';
import './Header.scss';

const Header = () => (
  <header className="header">
    <h1 className="header_title">User Agent <strong>Anatomizer</strong></h1>
    <nav className="header_nav">
      <ul className="header_nav-list">
        <li className="header_nav-item">
          <a className="header_nav-link" href="https://github.com/edwarddamato/ua-anatomizer" rel="noopener noreferrer" target="_blank">View on Github</a>
        </li>
        <li className="header_nav-item">
          Edward D&#39;Amato &copy; {(new Date()).getFullYear()}
        </li>
      </ul>
    </nav>
  </header>
);

export default Header;
