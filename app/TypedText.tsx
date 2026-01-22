'use client';

import { useEffect, useState } from 'react';

interface TypedTextProps {
  text: string;
  speed?: number;
  className?: string;
}

export default function TypedText({ text, speed = 50, className = '' }: TypedTextProps) {
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let currentIndex = 0;
    const timer = setInterval(() => {
      if (currentIndex <= text.length) {
        setDisplayedText(text.slice(0, currentIndex));
        currentIndex++;
      } else {
        setIsTyping(false);
        clearInterval(timer);
      }
    }, speed);

    return () => clearInterval(timer);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayedText}
      {isTyping && (
        <span className="animate-pulse ml-1 inline-block w-1 h-12 bg-gray-900 align-middle md:h-16 lg:h-20" />
      )}
    </span>
  );
}
