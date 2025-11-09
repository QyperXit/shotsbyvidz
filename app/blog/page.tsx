"use client";

import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import BlogModal from "./BlogModal";
import List from "./List";

const Page = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <List setSelected={setSelected} />
      <AnimatePresence>
        {selected && (
          <BlogModal selected={selected} setSelected={setSelected} />
        )}
      </AnimatePresence>
    </>
  );
};

export default Page;
