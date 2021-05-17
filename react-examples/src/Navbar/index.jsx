import React from 'react';
import { Link } from 'react-router-dom';

export const Navbar = () => {
  return (
    <nav>
      <Link to='/'>Home</Link>
      <Link to='/interval'>Interval</Link>
    </nav>
  )
};
