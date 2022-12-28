import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'
export default function Navbar() {
  return (
    <nav className='navbar'>
      <Link to='/Loggedin/Home'>Account</Link>
      <Link to='/Loggedin/Users'>Users</Link>
      <Link to='/Loggedin/Compose'>Compose</Link>
      <Link to='/Login'>Logout</Link>
       
 
    </nav>
  );
  }