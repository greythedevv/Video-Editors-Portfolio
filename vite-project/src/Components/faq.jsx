import { useState } from "react";

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We provide video editing, motion graphics, and content creation for clients."
  },
  {
    question: "How can I hire you?",
    answer: "You can contact me via email at workwithgreystudio@gmail.com or the contact section on this website."
  },
  {
    question: "Do you offer revisions?",
    answer: "Yes, I offer up to 3 revisions per project to ensure client satisfaction."
  },
  {
    question: "What is your turnaround time?",
    answer: "Typical projects take between 3-7 days depending on complexity."
  },
  {
    question: "What platforms do you edit videos for?",
    answer: "We specialize in short-form content for TikTok, Instagram Reels, and YouTube Shorts, as well as long-form videos for YouTube, podcasts, and interviews."
  },
  {
    question: "How does the editing process work?",
    answer: "Once you send your footage, we'll review your content, confirm the style you're going for, and get to work. You'll receive the first draft within a few days."
  }
];

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

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <WinWindow title="FAQ — Help & Support" icon="❓">
      <div className="faq-container">
        <h2>Answering your questions</h2>
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-item ${activeIndex === index ? "active" : ""}`}
            onClick={() => toggleFAQ(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === "Enter" && toggleFAQ(index)}
          >
            <h3 className="faq-question">
              {activeIndex === index ? "▼" : "▶"} {item.question}
            </h3>
            {activeIndex === index && (
              <p className="faq-answer">{item.answer}</p>
            )}
          </div>
        ))}
      </div>
    </WinWindow>
  );
};
