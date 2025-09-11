"use client";

import React, { useState } from "react";

export default function Faq() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "What is this platform about?",
      answer:
        "It’s a web-based complaint tracking system where residents can raise issues, staff can manage them, and owners can monitor everything in one dashboard.",
    },
    {
      question: "How is this different from WhatsApp groups or forms?",
      answer:
        "Unlike scattered chats or forms, our platform keeps every complaint organized with status updates, staff assignments, and transparent tracking.",
    },
    {
      question: "Do residents need any technical knowledge to use it?",
      answer:
        "Not at all. The interface is simple—residents just log in, file a complaint, and track its progress.",
    },
    {
      question: "What happens if a complaint is unresolved for a long time?",
      answer:
        "The system allows owners to track pending complaints and escalate them if they remain unresolved, ensuring accountability and timely action.",
    },
    {
      question: "Can staff also post notices, or only owners?",
      answer:
        "Only owners/admins can post official notices to maintain authenticity and prevent misuse. Staff and residents can only view them.",
    },
    {
      question: "Is my data safe on this platform?",
      answer:
        "Yes, your data is secure and only accessible based on your role (resident, staff, or owner).",
    },
  ];

  return (
    <section className="faq-section select-none" id="faq">
      <h2 className="faq-title bg-color-[#358289]">Frequently Asked Questions</h2>

      <div className="faq-grid">
        {faqData.map((item, index) => (
          <div
            key={index}
            className={`faq-flip-card ${
              flippedIndex === index ? "flipped" : ""
            }`}
            onMouseEnter={() => toggleFlip(index)}
            onMouseLeave={() => toggleFlip(index)}
          >
            <div className="faq-flip-inner">
              <div className="faq-front">{item.question}</div>
              <div className="faq-back">{item.answer}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
