import React from 'react';
import './FeaturedCollection.css';

export default function FeaturedCollection() {
  return (
    <div className='fc-card'>
      <div className='container'>
        <div className='residential-furniture'>
          <div className='rf-text'>
            <h3>Residential Furniture</h3>
            <button>Browse Collection</button>
          </div>
          <div className='rf-image'>
            <img
              src='/assets/residential-furniture.svg'
              alt='residential furniture'
            />
          </div>
        </div>

        <div className='hospitality-furniture'>
          <div className='hf-text'>
            <h3>Hospitality Furniture</h3>
            <button>Browse Collection</button>
          </div>
          <div className='hf-image'>
            <img
              src='/assets/hospitality-furniture.svg'
              alt='hospitality furniture'
            />
          </div>
        </div>
      </div>
    </div>
  );
}
