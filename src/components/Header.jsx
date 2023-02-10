import React from 'react';
import '../custom.css';

const Header = () => {
  return (
    <header>
      <nav className="navbar">
        <div className="header-group">
          <div>
            <img
              src="img/STUDENT - PROJECT/Group 13.jpg"
              alt="avatar"
              className="back-btn"
            />
          </div>
          <div>
            <button className="hire-btn">
              <p>HIRE</p>
            </button>
          </div>
        </div>
        <div className="personal">
          <div>
            <img src="img/14.jpg" alt="avatar" className="avatar" />
          </div>
          <div className="name">
            <h1>Pattie Trusdale</h1>
            <p>Full-stack Developer</p>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
