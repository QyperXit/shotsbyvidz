"use client";

import React, { useState } from "react";
import List from "./List";
import UrbanModel from "./UrbanModal";

const UrbanPage = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <List setSelected={setSelected} />
      <UrbanModel selected={selected} setSelected={setSelected} />
    </>
  );
};
export default UrbanPage;
