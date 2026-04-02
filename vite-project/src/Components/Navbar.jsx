import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={`Navbar-container ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-inner">

        {/* Logo — always left */}
        <div className="Navbar-logo">
          <h1>Grey Studio</h1>
        </div>

        {/* Desktop links — center/right, hidden on mobile */}
        <div className="Navbar-link-desktop-links">
          <Link to="/" onClick={() => window.scrollTo(0, 0)}>Home</Link>
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <Link to="/checkout">Checkout</Link>
        </div>
          

        {/* Hamburger — always far right, only visible on mobile */}
        <button
          className={`Navbar-hamburger ${isOpen ? "open" : ""}`}
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

   

      {/* Mobile dropdown — outside navbar-inner */}
      <div className={`Navbar-mobile-menu ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => { window.scrollTo(0, 0); closeMenu(); }}>Home</Link>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#projects" onClick={closeMenu}>Projects</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <Link to="/checkout" onClick={closeMenu}>Checkout</Link>
      </div>
       </div>
    </div>
  );
};

