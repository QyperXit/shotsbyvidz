"use client";

import React, { useState } from "react";
import HeroImages from "./HeroImages";
import Modal from "./Modal";

const HomePage = () => {
  const [selected, setSelected] = useState(null);
  return (
    <>
      <HeroImages setSelected={setSelected} />
      <Modal selected={selected} setSelected={setSelected} />
      {/* <PortraitsPage setSelected={setSelected} /> */}
    </>
  );
};

export default HomePage;
