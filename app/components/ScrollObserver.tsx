"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

const ScrollObserver = () => {
  const pathname = usePathname();

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -5% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const elements = document.querySelectorAll(".animate-on-scroll");
    elements.forEach((el) => observer.observe(el));

    return () => {
      observer.disconnect();
    };
  }, [pathname]); // Re-run on route change

  return null;
};

export default ScrollObserver;
