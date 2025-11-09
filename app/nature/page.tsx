"use client";

import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import List from "./List";
import NatureModal from "./NatureModal";

const NatureLandscapePage = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <List setSelected={setSelected} />
      <AnimatePresence>
        {selected && (
          <NatureModal selected={selected} setSelected={setSelected} />
        )}
      </AnimatePresence>
    </>
  );
};
export default NatureLandscapePage;
