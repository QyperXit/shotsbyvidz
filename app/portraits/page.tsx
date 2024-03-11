"use client";

import React, { useState } from "react";
import List from "./List";
import PortModal from "./PortModal";

const Portraits = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <List setSelected={setSelected} />
      <PortModal selected={selected} setSelected={setSelected} />
    </>
  );
};

export default Portraits;
