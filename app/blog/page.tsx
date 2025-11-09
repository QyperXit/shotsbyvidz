"use client";

import { AnimatePresence } from "framer-motion";
import React, { useState } from "react";
import BlogModal from "./BlogModal";
import List from "./List";
import type { BlogPost } from "./data/posts";

const Page = () => {
  const [selected, setSelected] = useState<BlogPost | null>(null);
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
