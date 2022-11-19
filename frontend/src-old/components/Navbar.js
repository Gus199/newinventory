import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <header id='header'>
      <Link to='/' className='logo'>
        Logo
      </Link>
      <ul>
        <li>
          <Link to='/login'>Login</Link>
        </li>
        <li>
          <Link to='/register'>Register</Link>
        </li>
        {/* <li>
          <a href='#services'>About</a>
        </li> */}
      </ul>
      <div className='toggle'></div>
    </header>
  );
};

export default Navbar;
