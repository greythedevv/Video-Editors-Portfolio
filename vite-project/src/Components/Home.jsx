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

export const Home = () => {
  return (
    <div id="home">
      <WinWindow title="Grey Studio — Welcome" icon="🎬">
        <div className="Home-container">
          <div className="hero-inner">
            <div className="hero-text-block">
              {/* Decorative progress bar */}
              <div style={{ marginBottom: "10px" }}>
                <div style={{ fontSize: "10px", marginBottom: "2px", color: "#808080" }}>
                  Loading awesome content...
                </div>
                <div className="win-progress">
                  <div className="win-progress-bar" style={{ width: "87%" }} />
                </div>
              </div>

              <div className="Text-Headline">
                <h1>Scroll-Stopping Short-Form Edits<br />That Boost Your Views</h1>
              </div>

              {/* Inset text area */}
              <div className="win-inset" style={{ padding: "8px", marginBottom: "12px" }}>
                <p className="Text-Paragraph">
                  In a world where attention spans are short, your content needs to hit fast and hit hard.
                  I craft dynamic, high-energy videos that grab attention, increase watch time,
                  and grow your audience.
                </p>
              </div>

              <div className="button-container">
                <a href="#projects" style={{ textDecoration: "none" }}>
                  <button className="View-Project-Button">📁 View Projects</button>
                </a>
                <button
                  className="Work-With-Me-Button"
                  onClick={() => window.location.href = "mailto:workwithgreystudio@gmail.com"}
                >
                  📧 Work With Me
                </button>
              </div>

              {/* Status bar */}
              <div className="status-bar" style={{ marginTop: "12px" }}>
                <div className="status-bar-item">Ready</div>
                <div className="status-bar-item">🎬 Video Editor</div>
                <div className="status-bar-item">📍 Available for hire</div>
              </div>
            </div>

            <div className="hero-video-block">
              <div style={{ marginBottom: "4px", fontSize: "10px", color: "#808080" }}>
                📺 showreel.mp4
              </div>
              <div className="video-container">
                <iframe
                  width="100%"
                  height="100%"
                  src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                  title="Showreel"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </div>
          </div>
        </div>
      </WinWindow>
    </div>
  );
};
