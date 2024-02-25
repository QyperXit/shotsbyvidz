"use client";

import React, { useState } from "react";
import List from "./List";
import NatureModal from "./NatureModal";

const NatureLandscapePage = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <List setSelected={setSelected} />
      <NatureModal selected={selected} setSelected={setSelected} />
    </>
  );
};
export default NatureLandscapePage;
