import React, { useState } from 'react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavClick = () => {
    setIsOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="logo">
        <i className="fas fa-om"></i> Divine Mandir
      </div>
      
      {/* Dynamic Class for Mobile Menu */}
      <ul className={isOpen ? "nav-links active" : "nav-links"}>
        <li><a href="#home" onClick={handleNavClick}>Home</a></li>
        <li><a href="#deities" onClick={handleNavClick}>Deities</a></li>
        <li><a href="#darshan" onClick={handleNavClick}>Live Darshan</a></li>
        <li><a href="#donate" onClick={handleNavClick}>Seva/Donate</a></li>
      </ul>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <i className="fas fa-bars"></i>
      </div>
    </nav>
  );
};

export default Navbar;