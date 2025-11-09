"use client";

import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import List from "./List";
import UrbanModel from "./UrbanModal";

const UrbanPage = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <List setSelected={setSelected} />
      <AnimatePresence>
        {selected && (
          <UrbanModel selected={selected} setSelected={setSelected} />
        )}
      </AnimatePresence>
    </>
  );
};
export default UrbanPage;
