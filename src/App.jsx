import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero-Section/HeroSection';
import Clients from './components/Clients-mentions/Clients';
import FeaturedCollection from './components/Featured-Collection/FeaturedCollection';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='page'>
      <Navbar />
      <HeroSection />
      <Clients />
      <FeaturedCollection />
    </div>
  );
}

export default App;
