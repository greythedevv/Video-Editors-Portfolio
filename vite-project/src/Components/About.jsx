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

export const About = () => {
  return (
    <WinWindow title="About Me — Grey Studio" icon="👤" id="about">
      <div className="About">
        <h2 className="about-me-headline">About Me</h2>
        <div className="About-container">
          <div style={{ flex: 1, minWidth: "200px" }}>
            <div className="win-inset" style={{ padding: "10px", marginBottom: "10px" }}>
              <p className="about-me-paragraph">
                I&apos;m a passionate video editor helping creators,
                brands, and businesses bring their stories to life
                through impactful visuals. With a keen eye for timing,
                transitions, and storytelling, I turn raw footage into
                polished content that connects with audiences.
              </p>
            </div>

            {/* Decorative skill bars */}
            <div style={{ marginBottom: "10px" }}>
              {[
                { label: "Short-Form Editing", pct: "95%" },
                { label: "Motion Graphics", pct: "80%" },
                { label: "Color Grading", pct: "88%" },
                { label: "Long-Form Editing", pct: "75%" },
              ].map((s) => (
                <div key={s.label} style={{ marginBottom: "6px" }}>
                  <div style={{ fontSize: "10px", marginBottom: "2px" }}>{s.label}</div>
                  <div className="win-progress">
                    <div className="win-progress-bar" style={{ width: s.pct }} />
                  </div>
                </div>
              ))}
            </div>

            <a href="#contact" style={{ textDecoration: "none" }}>
              <button className="about-me-button">📧 Contact Me</button>
            </a>
          </div>

          <div style={{ flex: 1, minWidth: "220px" }}>
            <div style={{ marginBottom: "4px", fontSize: "10px", color: "#808080" }}>
              📺 about-reel.mp4
            </div>
            <div className="video-container">
              <iframe
                width="100%"
                height="100%"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ"
                title="About reel"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      </div>
    </WinWindow>
  );
};
