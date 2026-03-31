import {  ProjectsData } from "../data/projectdata";

export const Projects = ()=> {
    

return(
    <div className="Projects-container" id="projects">
        <div className="projects">
        <h1 className="projects-headline">Recent works for clients</h1>
        <div className="projects-container">
           { ProjectsData.map((project) => (
                <div key={project.id} className="project-card">
                    <div className="video-container">
                        <iframe
                            src={project.videoUrl}
                            title={project.title}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                            className="video-sample"
                        ></iframe>
                    </div>
                </div>
            ))}

        </div>
        
        </div>
        <div className="view-project-button-container"> 
            <button className="View-Project-Button-project"> View my project</button>
        </div>
    </div>
)
}