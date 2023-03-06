import React from 'react';
import './HeroSection.css';

export default function HeroSection() {
  return (
    <section className='hero'>
      <div className='heading'>
        <h1>Modern Furniture For Modern Living Style</h1>
      </div>
      <div className='hero-content'>
        <div className='hero-left'>
          <p>
            In unfeeling existence objection immediate repulsive on he in.
            Imprudence comparison uncommonly me he difficulty diminution
            resolution. Likewise proposal differed scarcely dwelling as on
            raillery.
            <br /> <br />
            September few dependent extremity own continued and ten prevailed
            attending. Early to weeks we could. Do commanded an shameless we
            disposing do. Indulgence ten remarkably nor are impression out.
            Power is lived means oh every in we quiet.
          </p>
          <div className='buttons'>
            <button className='request'>Request a Quote</button>
            <button className='watch'>Watch Video</button>
          </div>
        </div>

        <div className='hero-right'>
          <img src='/assets/Hero-Image.png' alt='Hero Image' />
        </div>
      </div>
    </section>
  );
}
