

export const About = ()=> {


    return(
        <div className="About" id="about">
            <div>
            <h2 className="about-me-headline">About Me</h2 >
            </div>
            <div className="About-container">
           
            <div>
                <p className="about-me-paragraph"> 
                    I’m a passionate video editor helping creators,<br />
                    brands, and businesses bring their stories to life <br /> 
                    through impactful visuals. With a keen eye for timing, <br /> 
                    transitions, and storytelling, I turn raw footage into <br />
                    polished content that connects with audiences.
                </p>
                <div className="">
                    <a href="#contact"> <button className="about-me-button">Contact Me</button></a>
                </div>
            </div>

             <div className="">
                    <iframe
                        width="560"
                        height="415"
                        src= "https://www.youtube.com/embed/dQw4w9WgXcQ"
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                </div>
            
        </div>
        </div>
    )
}