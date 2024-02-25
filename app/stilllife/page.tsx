"use client";
import React, { useState } from "react";
import List from "./List";
import StillModal from "./StillModal";

const StillLife = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <List setSelected={setSelected} />
      <StillModal selected={selected} setSelected={setSelected} />
    </>
  );
};

export default StillLife;
