import{ Link } from "react-router-dom";

export const Footer = () => {

    return(
        <div className="footer-container" id="contact">
            <div className="footer">
                <h1 className="footer-headline">Ready to make your videos go viral?</h1>
                <p className="footer-subheadline">Ready to elevate your content? Contact me today to discuss your project and how I can help bring your vision to life.</p>
                <a href="mailto:workwithgreystudio@gmail.com">
                <button className="contact-me-button">Contact Me</button></a>
            </div>
            <hr className="hr"/>
            <div>
            <div className="Navbar-container1">
            <div className="Navbar-logo">
               
             <h1>Grey Studio</h1>
            </div >
            <div className="footer-second">
            <div className="footer-links">
      <Link to="/" onClick={() => window.scrollTo(0, 0)}> Home </Link>
            <a href="#about">About</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact</a>
          <Link to="/checkout">Checkout</Link>

            </div>
         </div>
        </div>
        </div>
        </div>
    )

}