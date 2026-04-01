const WinWindow = ({ title, icon = "🖥️", children, id }) => (
  <div className="win-window" id={id} style={{ marginBottom: "8px" }}>
    <div className="win-titlebar">
      <div className="win-titlebar-title">
        <span>{icon}</span>
        <span>{title}</span>
      </div>
      <div className="win-titlebar-buttons">
        <div className="win-titlebar-btn" title="Minimize">_</div>
        <div className="win-titlebar-btn" title="Maximize">□</div>
        <div className="win-titlebar-btn" title="Close" style={{ fontWeight: "bold" }}>✕</div>
      </div>
    </div>
    <div className="win-content">{children}</div>
  </div>
);

export const Footer = () => {
  return (
    <WinWindow title="Contact — Grey Studio" icon="📧" id="contact">
      <div className="footer-container">
        {/* Dialog-style contact box */}
        <div style={{
          border: "2px solid #808080",
          borderTop: "2px solid #ffffff",
          borderLeft: "2px solid #ffffff",
          padding: "16px",
          marginBottom: "12px",
          background: "#d4d0c8"
        }}>
          {/* Icon + text */}
          <div style={{ display: "flex", gap: "16px", alignItems: "flex-start", flexWrap: "wrap" }}>
            <div style={{
              fontSize: "48px",
              lineHeight: "1",
              border: "2px solid #808080",
              borderTop: "2px solid #ffffff",
              borderLeft: "2px solid #ffffff",
              padding: "8px",
              background: "#fff"
            }}>
              📬
            </div>
            <div style={{ flex: 1, minWidth: "200px" }}>
              <h1 className="footer-headline">Ready to make your videos go viral?</h1>
              <p className="footer-subheadline">
                Ready to elevate your content? Contact me today to discuss your project
                and how I can help bring your vision to life.
              </p>
              <a href="mailto:workwithgreystudio@gmail.com" style={{ textDecoration: "none" }}>
                <button className="contact-me-button">📧 Contact Me</button>
              </a>
            </div>
          </div>
        </div>

        <hr className="hr" />

        {/* Footer bottom bar */}
        <div className="Navbar-container" style={{
          position: "static",
          background: "transparent",
          border: "none",
          borderTop: "1px solid #808080",
          borderBottom: "none",
          padding: "6px 0 0 0"
        }}>
          <div className="Navbar-logo">
            <h1>Grey Studio</h1>
          </div>
          <div className="Navbar-link" style={{ display: "flex", gap: 0 }}>
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          </div>
        </div>

        {/* Status bar */}
        <div className="status-bar" style={{ marginTop: "8px" }}>
          <div className="status-bar-item">© 2025 Grey Studio</div>
          <div className="status-bar-item">🎬 All Rights Reserved</div>
          <div className="status-bar-item">Internet Explorer 6.0</div>
        </div>
      </div>
    </WinWindow>
  );
};
