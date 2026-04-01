import { ProjectsData } from "../data/projectdata";

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

export const Projects = () => {
  return (
    <WinWindow title="Portfolio — Recent Client Work" icon="📁" id="projects">
      <div className="Projects-container">
        <h1 className="projects-headline">Recent works for clients</h1>

        {/* Toolbar */}
        <div style={{
          display: "flex",
          gap: "4px",
          marginBottom: "8px",
          paddingBottom: "6px",
          borderBottom: "1px solid #808080"
        }}>
          {["📋 View", "🔍 Sort", "📤 Share"].map((label) => (
            <button key={label} className="win-btn" style={{ fontSize: "10px", padding: "2px 8px" }}>
              {label}
            </button>
          ))}
        </div>

        <div className="projects-container">
          {ProjectsData.map((project) => (
            <div key={project.id}>
              {/* File label */}
              <div style={{
                fontSize: "10px",
                color: "#808080",
                marginBottom: "2px",
                display: "flex",
                alignItems: "center",
                gap: "4px"
              }}>
                <span>📹</span>
                <span>{project.title}.mp4</span>
              </div>
              <div className="project-card">
                <div style={{ width: "100%", height: "100%" }}>
                  <iframe
                    src={project.videoUrl}
                    title={project.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="video-sample"
                    style={{ width: "100%", height: "100%", display: "block" }}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="view-project-button-container">
          <a href="#projects" style={{ textDecoration: "none" }}>
            <button className="View-Project-Button-project">📁 View All Projects</button>
          </a>
        </div>
      </div>
    </WinWindow>
  );
};
