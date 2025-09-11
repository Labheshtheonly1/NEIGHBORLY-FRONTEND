"use client";

import React, { useState } from "react";

export default function Faq() {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const toggleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index);
  };

  const faqData = [
    {
      question: "How do I log in or register?",
      answer:
        "Our AI analyzes your photos, preferences, and style goals to create personalized outfit recommendations that match your unique taste and lifestyle.",
    },
    {
      question: "How do I raise or track a complaint?",
      answer:
        "Yes! We use advanced encryption and never share your personal photos or data with third parties. Your privacy is our top priority.",
    },
    {
      question: "Can I book society facilities online?",
      answer:
        "Absolutely! Simply photograph your items and our AI will categorize them and include them in your personalized styling recommendations.",
    },
    {
      question: "Can I make payments online??",
      answer:
        "Our AI learns from your feedback and becomes more accurate over time, with a 95% user satisfaction rate for outfit recommendations.",
    },
    {
      question: "Who do I contact for support?",
      answer:
        "From casual daily wear to formal events, parties, work meetings, and special occasions - we've got every style scenario covered.",
    },
    {
      question: "Is my data safe on this platform?",
      answer:
        "Yes! StyleMe is available on both iOS and Android with full functionality and seamless cloud sync across all your devices.",
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
            onClick={() => toggleFlip(index)}
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
