import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/'>Home</Link>
      <Link to='Home'>Users</Link>
      <Link to='Compose'>Compose</Link>
 
    </nav>
  );
}