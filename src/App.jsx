import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Deities from './components/Deities';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <Deities />
      <MusicPlayer />
      <footer>
        <p>&copy; 2026 Divine Mandir. Om Tat Sat. 🙏</p>
      </footer>
    </div>
  );
}

export default App;