"use client";

import React, { useEffect, useRef } from "react";

const AnimatedBackground = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (spotlightRef.current) {
        spotlightRef.current.style.setProperty("--x", `${e.clientX}px`);
        spotlightRef.current.style.setProperty("--y", `${e.clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      {/* Spline Background */}
      <div
        className="fixed top-0 left-0 w-full h-screen -z-10 saturate-50 hue-rotate-15 blur-md pointer-events-none"
        data-alpha-mask="80"
        style={{
          maskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
          WebkitMaskImage:
            "linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full z-0">
          <iframe
            src="https://my.spline.design/glowingplanetparticles-HmCVKutonlFn3Oqqe6DI9nWi/"
            width="100%"
            height="100%"
            className="w-full h-full border-none"
            id="aura-spline"
            title="Animated Background"
          />
        </div>
      </div>

      {/* Spotlight Overlay */}
      <div
        ref={spotlightRef}
        className="fixed top-0 left-0 w-full h-full pointer-events-none z-40"
        style={{
          background:
            "radial-gradient(600px at var(--x, 50%) var(--y, 50%), rgba(255, 255, 255, 0.03), transparent 80%)",
        }}
      />
    </>
  );
};

export default AnimatedBackground;
