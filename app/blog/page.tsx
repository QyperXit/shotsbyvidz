"use client";

import React, { useState } from "react";
import BlogModal from "./BlogModal";
import List from "./List";

const Page = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <List setSelected={setSelected} />
      <BlogModal selected={selected} setSelected={setSelected} />
    </>
  );
};

export default Page;
