import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/Hero-Section/HeroSection';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className='App'>
      <Navbar />
      <HeroSection />
    </div>
  );
}

export default App;
