"use client";

import { useEffect } from "react";

export default function ClientWrapper({ children }) {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const elements = document.querySelectorAll("[data-slide-in]");

      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add("opacity-100", "translate-y-0");
              entry.target.classList.remove("opacity-0", "translate-y-10");
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.2 }
      );

      elements.forEach((el) => observer.observe(el));

      return () => observer.disconnect(); // Cleanup observer
    }
  }, []);

  return <>{children}</>;
}
