import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle } from '@fortawesome/free-solid-svg-icons';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <div className="logo">FreeTax - Freelancer Finance</div>
      <button className="profile-button">
        <FontAwesomeIcon icon={faUserCircle} />
        ALEX JOHNSON
      </button>
    </div>
  );
}

export default Header;