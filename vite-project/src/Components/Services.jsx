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

export const Services = () => {
  return (
    <WinWindow title="Services — What We Can Do For You" icon="⚙️" id="services">
      <div className="Services-container">
        <div className="Services">
          <h1 className="services-headline">What we can do for you</h1>
          <div className="services-container">
            {[
              {
                num: "01",
                title: "Short-Form Edits",
                desc: "High-impact edits crafted for TikTok, Reels, and Shorts. Designed to capture attention fast, boost retention, and drive real audience growth.",
                icon: "📱"
              },
              {
                num: "02",
                title: "Long-Form Edits",
                desc: "Professional edits for YouTube, podcasts, and more. From pacing to polish, we make long-form content engaging from the first second to the last.",
                icon: "🎬"
              },
              {
                num: "03",
                title: "Brand-Driven Motion Design",
                desc: "Elevate your videos with custom graphics and animations that reflect your brand identity and keep your content looking pro.",
                icon: "✨"
              },
              {
                num: "04",
                title: "Video Shoot",
                desc: "High‑quality filming with clean visuals, proper lighting, and sharp storytelling.",
                icon: "📷"
              },
            ].map((s) => (
              <div key={s.num} className="service-card">
                <p className="service-title-number">{s.icon} {s.num}</p>
                <h2 className="service-title">{s.title}</h2>
                <p className="service-description">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WinWindow>
  );
};
