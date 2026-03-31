import { FaStar } from "react-icons/fa";

export const Reviews = ()=>{

    const Review = [
        {
            id:1,
            Name: "John Doe",
            Review: "Grey Studio transformed my raw footage into a captivating story that resonated with my audience. Their attention to detail and creative vision exceeded my expectations. Highly recommend!",
            Image : "https://randomuser.me/api/portraits/men/1.jpg"
        },
        {

            id:2,
            Name: "Jane Smith",
            Review: "Working with Grey Studio was a fantastic experience. They took my vision and turned it into a stunning video that perfectly captured the essence of my brand. The communication was excellent, and the final product was delivered on time. I couldn't be happier!",
            Image : "https://randomuser.me/api/portraits/women/2.jpg"   
        },
        {
            id:3,
            Name: "Michael Johnson",
            Review: "Grey Studio's video editing skills are top-notch. They transformed my raw footage into a polished and engaging video that exceeded my expectations. The team was professional, responsive, and easy to work with. I highly recommend their services!",
            Image : "https://randomuser.me/api/portraits/men/3.jpg"
        },
        {
            id:4,
            Name: "Emily Davis",
            Review: "I had a great experience working with Grey Studio. They took my raw footage and turned it into a visually stunning video that perfectly captured the essence of my brand. The team was professional, responsive, and easy to work with. I highly recommend their services!",
            Image : "https://randomuser.me/api/portraits/women/4.jpg"}
    ]

    return(
        <div>
            <div>
             <h1 className="reviews-headline"> Hear from those who trust us</h1>
            <div className="reviews-container"> { 
                Review.map((review) => (
                    <div key={review.id} className="review-card">
                        <div className="reviewer-info">
                            <div>
                            <img src={review.Image} alt={review.Name} className="reviewer-image" />
                            </div>
                            <div>
                            <h3 className="reviewer-name">{review.Name}</h3>
                             <div className="review-stars"><FaStar />  <FaStar />  <FaStar />  <FaStar />  <FaStar /> </div></div>
                        </div>
                        <div className="review-content">
                            <p className="review-text">{review.Review}</p>
                           
                        </div>
                    </div>
                   
                ))
             }    </div>             
            </div>
        </div>
    )
}