import React from 'react';
import './Clients.css';

export default function Clients() {
  return (
    <div className='clients'>
      <h3>SOME OF OUR TRUSTED CLIENTS</h3>
      <div className='logos'>
        <img src='/assets/stripe.svg' alt='stripe' />
        <img src='/assets/google.svg' alt='google' />
        <img src='/assets/deloitte.svg' alt='deloitte' />
        <img src='/assets/accenture.svg' alt='accenture' />
        <img src='/assets/ibm.svg' alt='ibm' />
        <img src='/assets/samsung.svg' alt='samsung' />
      </div>
    </div>
  );
}
