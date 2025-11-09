"use client";

import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import AutoModal from "./AutoModal";
import List from "./List";

const Automotive = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <List setSelected={setSelected} />
      <AnimatePresence>
        {selected && (
          <AutoModal selected={selected} setSelected={setSelected} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Automotive;
