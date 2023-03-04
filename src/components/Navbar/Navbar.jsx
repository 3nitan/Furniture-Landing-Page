import React from 'react';
import './Navbar.css';

export default function Navbar() {
  return (
    <nav>
      <div className='logo'>
        <img src='/assets/Logo.svg' alt='' />
      </div>

      <div className='menu-items'>
        <ul>
          <li>
            <a href=''>home</a>
          </li>
          <li>
            <a href=''>about us</a>
          </li>
          <li>
            <a href=''>products</a>
          </li>
          <li>
            <a href=''>faqs</a>
          </li>
          <li>
            <a href=''>contact us</a>
          </li>
        </ul>
      </div>

      <div className='buttons'>
        <ul>
          <li>
            <img src='/assets/search.svg' alt='search' />
          </li>
          <li>
            <img src='/assets/basket.svg' alt='basket' />
          </li>
          <li>
            <img src='/assets/person.svg' alt='' />
          </li>
        </ul>
      </div>
    </nav>
  );
}
