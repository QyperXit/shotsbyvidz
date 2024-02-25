import Image from "next/image";
import React from "react";

import van from "../images/portraits/Van.jpg";

const page = () => {
  return (
    <div>
      <Image src={van} />
    </div>
  );
};

export default page;
