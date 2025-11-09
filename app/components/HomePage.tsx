"use client";
import { AnimatePresence } from "framer-motion"; // Add this import

import React, { useState } from "react";
import HeroImages from "./HeroImages";
import Modal from "./Modal";

const HomePage = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <HeroImages setSelected={setSelected} />
      <AnimatePresence>
        <Modal selected={selected} setSelected={setSelected} />
      </AnimatePresence>
    </>
  );
};

export default HomePage;
