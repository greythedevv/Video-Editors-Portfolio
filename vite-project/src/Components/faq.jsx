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