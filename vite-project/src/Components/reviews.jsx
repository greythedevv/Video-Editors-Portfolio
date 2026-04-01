import { FaStar } from "react-icons/fa";

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

export const Reviews = () => {
  const Review = [
    {
      id: 1,
      Name: "John Doe",
      Review: "Grey Studio transformed my raw footage into a captivating story that resonated with my audience. Their attention to detail and creative vision exceeded my expectations. Highly recommend!",
      Image: "https://randomuser.me/api/portraits/men/1.jpg"
    },
    {
      id: 2,
      Name: "Jane Smith",
      Review: "Working with Grey Studio was a fantastic experience. They took my vision and turned it into a stunning video that perfectly captured the essence of my brand.",
      Image: "https://randomuser.me/api/portraits/women/2.jpg"
    },
    {
      id: 3,
      Name: "Michael Johnson",
      Review: "Grey Studio's video editing skills are top-notch. They transformed my raw footage into a polished and engaging video that exceeded my expectations.",
      Image: "https://randomuser.me/api/portraits/men/3.jpg"
    },
    {
      id: 4,
      Name: "Emily Davis",
      Review: "I had a great experience working with Grey Studio. They took my raw footage and turned it into a visually stunning video that perfectly captured my brand.",
      Image: "https://randomuser.me/api/portraits/women/4.jpg"
    }
  ];

  return (
    <WinWindow title="Reviews — Client Testimonials" icon="⭐">
      <div style={{ padding: "0" }}>
        <h1 className="reviews-headline">Hear from those who trust us</h1>
        <div className="reviews-container">
          {Review.map((review) => (
            <div key={review.id} className="review-card">
              <div className="reviewer-info">
                <img
                  src={review.Image}
                  alt={review.Name}
                  className="reviewer-image"
                />
                <div>
                  <h3 className="reviewer-name">{review.Name}</h3>
                  <div className="review-stars">
                    <FaStar />{" "}<FaStar />{" "}<FaStar />{" "}<FaStar />{" "}<FaStar />
                  </div>
                </div>
              </div>
              <div className="win-inset" style={{ padding: "6px" }}>
                <p className="review-text">{review.Review}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </WinWindow>
  );
};
