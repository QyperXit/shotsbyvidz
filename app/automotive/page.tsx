"use client";

import React, { useState } from "react";
import AutoModal from "./AutoModal";
import List from "./List";

const Automotive = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <List setSelected={setSelected} />
      <AutoModal selected={selected} setSelected={setSelected} />
    </>
  );
};

export default Automotive;
