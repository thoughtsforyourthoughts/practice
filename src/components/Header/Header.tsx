import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header>
      <Link to='/'>Home</Link> | <Link to='Contact'>Contact Us</Link>
    </header>
  );
};

export default Header;
