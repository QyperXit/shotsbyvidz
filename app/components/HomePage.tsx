"use client";
import { AnimatePresence } from "framer-motion"; // Add this import

import React, { useState } from "react";
import HeroImages from "./HeroImages";
import HeroSection from "./HeroSection";
import Modal from "./Modal";

const HomePage = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <HeroSection />
      <HeroImages setSelected={setSelected} />
      <AnimatePresence>
        <Modal selected={selected} setSelected={setSelected} />
      </AnimatePresence>
    </>
  );
};

export default HomePage;
