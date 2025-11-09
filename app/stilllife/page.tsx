"use client";
import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import List from "./List";
import StillModal from "./StillModal";

const StillLife = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <List setSelected={setSelected} />
      <AnimatePresence>
        {selected && (
          <StillModal selected={selected} setSelected={setSelected} />
        )}
      </AnimatePresence>
    </>
  );
};

export default StillLife;
