import { useState, useEffect } from "react";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  return (
    <>
      {/* Menu bar */}
      <div className="Navbar-container" style={{ position: "relative" }}>
        <div className="Navbar-logo">
          <h1>Grey Studio</h1>
        </div>

        {/* Hamburger button */}
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
        <div className="Navbar-link desktop-links" style={{ display: "flex", gap: 0 }}>
          <a href="#home">File</a>
          <a href="#about">About</a>
          <a href="#projects">Portfolio</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
          <a href="#contact">Help</a>
        </div>

        {/* Mobile dropdown */}
        <div className={`Navbar-mobile-menu ${isOpen ? "open" : ""}`}>
          <a href="#home" onClick={closeMenu}>Home</a>
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#projects" onClick={closeMenu}>Projects</a>
          <a href="#services" onClick={closeMenu}>Services</a>
          <a href="#contact" onClick={closeMenu}>Contact</a>
        </div>
      </div>

      {/* Marquee bar */}
      <div className="marquee-bar">
        <marquee behavior="scroll" direction="left" scrollamount="3">
          ★ WELCOME TO GREY STUDIO ★ Professional Video Editing Services ★ TikTok · Reels · YouTube · Podcasts ★ Short-Form &amp; Long-Form Edits ★ Contact: workwithgreystudio@gmail.com ★ SCROLL-STOPPING CONTENT GUARANTEED ★
        </marquee>
      </div>

      {/* Taskbar */}
      <div className="taskbar">
        <button className="taskbar-start" aria-label="Start">
          <span style={{ fontSize: "14px" }}>⊞</span>
          <strong>Start</strong>
        </button>
        <div className="taskbar-divider" />
        <div className="taskbar-item">📁 Grey Studio</div>
        <div className="taskbar-item">🎬 Portfolio</div>
        <div className="taskbar-clock">{time}</div>
      </div>
    </>
  );
};
