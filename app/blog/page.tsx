"use client";

import React, { useState } from "react";
import BlogModal from "./BlogModal";
import List from "./List";

const page = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <List setSelected={setSelected} />
      <BlogModal selected={selected} setSelected={setSelected} />
    </>
  );
};

export default page;
