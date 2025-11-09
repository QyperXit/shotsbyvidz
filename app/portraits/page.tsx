"use client";

import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import List from "./List";
import PortModal from "./PortModal";

const Portraits = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <List setSelected={setSelected} />
      <AnimatePresence>
        {selected && (
          <PortModal selected={selected} setSelected={setSelected} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Portraits;
