import { useState } from "react";

const faqData = [
  {
    question: "What services do you offer?",
    answer: "We provide video editing, motion graphics, and content creation for clients."
  },
  {
    question: "How can I hire you?",
    answer: "You can contact me via email or the contact form on this website."
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
    answer: "We specialize in short-form content for TikTok, Instagram Reels, and YouTube Shorts, as well as long-form videos for YouTube, podcasts, and interviews. Every video is formatted specifically for the platform it's meant for, ensuring optimal quality and performance."
  },
  {
    question: "How does the editing process work?",
    answer: "Once you send your footage, we’ll review your content, confirm the style you’re going for, and get to work. You’ll receive the first draft within a few days, and we include revisions to make sure the final video matches your vision."
  }

];

export const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2> Answering your questions</h2>
      {faqData.map((item, index) => (
        <div
          key={index}
          className={`faq-item ${activeIndex === index ? "active" : ""}`}
          onClick={() => toggleFAQ(index)}
        >
          <h3 className="faq-question">{item.question}</h3>
          {activeIndex === index && <p className="faq-answer">{item.answer}</p>}
        </div>
      ))}
    </div>
  );
};