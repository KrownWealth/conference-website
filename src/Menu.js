import React from 'react';
import { Link } from 'react-router-dom';

 const Menu = () => {
  return(
    <nav className='navbar navbar-expend-sm bg-dark navbar-dark'>
      <div className='navbar'>
        <ul className='navbar-nav'>
        <li className='nav-item'>
            <Link to="/">Home</Link> 
          </li>
          <li className='nav-item'>
            <Link to="/speakers">Speakers</Link> 
          </li>
        </ul>
      </div>
    </nav>
  )
}


export default Menu;
