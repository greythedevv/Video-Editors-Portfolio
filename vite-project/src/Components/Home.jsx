import { useContext } from "react"
import { VOWButton } from "../Context/view our project"


export const Home = () =>{
    const {clicked, toggleClick} = useContext(VOWButton)

    return(
        <div>
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
            <div className="button-container"> // New div for button container
            <div className="VPButtton">//view project button
                <button className="View-Project-Button" onClick={toggleClick}>{clicked ? "Clicked ✅" : "Click Me"}</button>
            </div>
            <div className="WWMButton"> //work with me button
                <button className="Work-With-Me-Button">Work With Me</button>
            </div>
            </div>
            </div>

    )
}