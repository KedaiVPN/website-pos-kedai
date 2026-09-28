'use client';

import { useState } from 'react';

interface FaqItemProps {
  question: string;
  children: React.ReactNode;
}

export default function FaqItem({ question, children }: FaqItemProps) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className={`faq-item ${isActive ? 'active' : ''}`}>
      <button 
        className="faq-question"
        onClick={() => setIsActive(!isActive)}
        aria-expanded={isActive}
      >
        {question}
      </button>
      <div className="faq-answer">
        {children}
      </div>
    </div>
  );
}
