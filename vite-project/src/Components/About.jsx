

export const About = ()=> {


    return(
        <div className="About">
        <div className="About-container">
            <div className="">
                <h1 className="about-me-headline">About Me</h1>
            </div>
            <div>
                <p className="about-me-paragraph"> 
                    I’m a passionate video editor helping creators,<br />
                    brands, and businesses bring their stories to life <br /> 
                    through impactful visuals. With a keen eye for timing, <br /> 
                    transitions, and storytelling, I turn raw footage into <br />
                    polished content that connects with audiences.
                </p>
                <div className="">
                    <button className="about-me-button">Work with me</button>
                </div>
                <div className="video">
                    <iframe
                        width="560"
                        height="315"
                        src="https://youtu.be/F1KsjN1eNV8?si=AxeDY9PUrCQAG0Qq"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>
            
        </div>
        </div>
    )
}