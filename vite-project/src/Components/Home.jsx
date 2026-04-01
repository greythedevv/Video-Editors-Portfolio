



export const Home = () =>{
    
    

    return(
        <div id="home"> 
        <div className="Home-container">
            <div className="Text-Headline">
                <h1>Scroll-Stopping Short-Form Edits <br />
                     That Boost Your Views    
                </h1>
           
            <div>
                <h3 className="Text-Paragraph">
                    In a world where attention spans are short,
                    your content need <br /> to hit fast and hit hard. 
                    I craft dynamic, high-energy videos that grab 
                    attention, <br /> increase watch time, and grow your audience.
                </h3>
            </div>
            </div>
            </div>
            {/* New div for button container */}
            <div className="button-container"> 
                {/* view project button */}
            <div className="VPButtton">
                <a href="#projects"> <button className="View-Project-Button">View my project</button></a>
            </div>
            {/* work with me button */}
            <div className="WWMButton"> 
                <button className="Work-With-Me-Button" onClick={()=> window.location.href="mailto:workwithgreystudio@gmail.com"}>Work With Me</button>
            </div>
            </div>
            </div>

    )
}