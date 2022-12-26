import React from 'react';
import { Link } from 'react-router-dom';
export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='Home'>Home</Link>
      <Link to='Users'>Users</Link>
      <Link to='Compose'>Compose</Link>
 
    </nav>
  );
  }