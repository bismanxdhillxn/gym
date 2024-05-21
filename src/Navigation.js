import React from 'react';
import { HashLink } from 'react-router-hash-link';
import { useNavigate } from 'react-router-dom';

export default function Navigation() {
  const navigate = useNavigate();

  function logout() {
    localStorage.removeItem('user');
    navigate('/');

  }
    return (
      <nav class="nav">
        <div class="nav_logo"></div>

        <ul class="nav_links">
        
          <li class="link">
            <HashLink smooth to="/#home">Home</HashLink>
          </li>
          <li class="link">
            <HashLink smooth to="/#program">Program</HashLink>
          </li>
          <li class="link">
            <HashLink smooth to="/#service">Service</HashLink>
          </li>
          <li class="link">
            <HashLink smooth to="/#about">About</HashLink>
          </li>
          <li class="link">
            <HashLink smooth to="/store">Store</HashLink>
          </li>
         
          <li class="link">
            <HashLink smooth to="/#community">Community</HashLink>
          </li>
         
          <li class="link">
            <HashLink className='cart' smooth to="/buy">Cart</HashLink>
          </li>
        </ul>
        {(localStorage.getItem('user')!==null)?<button class="nav_btn logout-btn" onClick={logout}>Logout</button>:<a class="nav_btn" href="/login">Login</a> }
        
      </nav>

    )
  }