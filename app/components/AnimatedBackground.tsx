"use client";

import React from "react";

const AnimatedBackground = () => {
  return (
    <>
      {/* Tech Background */}
      <div className="fixed inset-0 z-[-10] pointer-events-none bg-[#050505]">
        <div className="absolute inset-0 bg-grid-pattern"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/40 to-black"></div>
        {/* Floating Orbs */}
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-purple-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob opacity-40"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-blue-900/20 rounded-full mix-blend-screen filter blur-[100px] animate-blob animation-delay-2000 opacity-40"></div>
        <div className="absolute bottom-[-20%] left-[20%] w-[600px] h-[600px] bg-pink-900/10 rounded-full mix-blend-screen filter blur-[120px] animate-blob animation-delay-4000 opacity-40"></div>
      </div>
    </>
  );
};

export default AnimatedBackground;
