"use client";

import { useEffect } from "react";

export default function ScrollToTopButton() {
  useEffect(() => {
    const button = document.createElement("button");
    button.innerHTML = `
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 4L12 20M12 4L18 10M12 4L6 10" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    `;
    button.className = `
      fixed bottom-24 right-6 z-50 
      w-12 h-12 
      bg-gradient-to-r from-slate-600 to-slate-700 text-white 
      rounded-full shadow-lg 
      opacity-0 pointer-events-none
      transition-all duration-300 
      hover:from-slate-700 hover:to-slate-800 hover:shadow-xl hover:scale-110
      flex items-center justify-center
      group
    `;
    button.id = "scroll-to-top";
    button.setAttribute("aria-label", "Scroll to top");

    // Add click handler
    button.addEventListener("click", () => {
      window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    });

    // Show/hide based on scroll position
    const handleScroll = () => {
      if (window.scrollY > 400) {
        button.style.opacity = "1";
        button.style.pointerEvents = "auto";
      } else {
        button.style.opacity = "0";
        button.style.pointerEvents = "none";
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.body.appendChild(button);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (document.body.contains(button)) {
        document.body.removeChild(button);
      }
    };
  }, []);

  return null;
}
