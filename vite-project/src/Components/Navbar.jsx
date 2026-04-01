import { useState } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <div className="Navbar-container">
      <div className="Navbar-logo">
        <h1>Grey Studio</h1>
      </div>

      {/* Hamburger button — only visible on mobile */}
      <button
        className={`Navbar-hamburger ${isOpen ? "open" : ""}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Desktop links */}
      <div className="Navbar-link desktop-links">
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <a href="#contact">Checkout</a>
      </div>

      {/* Mobile dropdown */}
      <div className={`Navbar-mobile-menu ${isOpen ? "open" : ""}`}>
        <a href="#home" onClick={closeMenu}>Home</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a href="#contact" onClick={closeMenu}>Checkout</a>
      </div>
    </div>
  );
};