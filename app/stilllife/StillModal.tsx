import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const StillModal = ({ selected, setSelected }) => {
  if (!selected) {
    return <></>;
  }
  return (
    <div
      onClick={() => setSelected(null)}
      className="fixed inset-0 bg-black/50 z-50 cursor-pointer overflow-y-scroll"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className=" w-full max-w-[960px] mx-auto my-24 px-8 cursor-default"
      >
        <motion.div layoutId={`card-${selected.id}`}>
          <Image
            alt={selected.id}
            src={selected.url}
            width={1080}
            height={1080}
          />
        </motion.div>
      </div>
    </div>
  );
};

export default StillModal;
