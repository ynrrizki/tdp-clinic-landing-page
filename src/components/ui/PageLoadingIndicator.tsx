"use client";

import { useState, useEffect } from 'react';

export default function PageLoadingIndicator() {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleStart = () => {
      timeoutId = setTimeout(() => {
        setIsLoading(true);
      }, 100); // Only show loading if it takes more than 100ms
    };

    const handleComplete = () => {
      clearTimeout(timeoutId);
      setIsLoading(false);
    };

    // Listen for navigation events
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a');
      
      if (link && link.href && !link.href.startsWith('#') && !link.target) {
        const url = new URL(link.href);
        if (url.origin === window.location.origin) {
          handleStart();
        }
      }
    };

    document.addEventListener('click', handleClick);
    window.addEventListener('beforeunload', handleStart);
    window.addEventListener('load', handleComplete);

    return () => {
      clearTimeout(timeoutId);
      document.removeEventListener('click', handleClick);
      window.removeEventListener('beforeunload', handleStart);
      window.removeEventListener('load', handleComplete);
    };
  }, []);

  if (!isLoading) return null;

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-[9999] bg-transparent">
      <div className="h-full bg-gradient-to-r from-primary via-primary/80 to-primary animate-pulse">
        <div className="h-full bg-primary/50 animate-[loading_1s_ease-in-out_infinite]"></div>
      </div>
      <style jsx>{`
        @keyframes loading {
          0% { transform: translateX(-100%); }
          50% { transform: translateX(0%); }
          100% { transform: translateX(100%); }
        }
      `}</style>
    </div>
  );
}
