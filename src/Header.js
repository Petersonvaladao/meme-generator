import React from 'react';
import logoImg from '../src/images/troll.png';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src={logoImg} alt="logo" />
        <h2>Meme Generator</h2>
      </div>
      <span>Powered by React</span>
    </header>
  );
};

export default Header;
