import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const UrbanModal = ({ selected, setSelected }) => {
  if (!selected) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={() => setSelected(null)}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer bg-black/50"
    >
      <motion.div
        initial={{ scale: 0.8, opacity: 0, y: 50 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        exit={{ scale: 0.8, opacity: 0, y: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 30, duration: 0.4 }}
        onClick={(e) => e.stopPropagation()}
        className="w-full max-w-5xl max-h-[95vh] flex flex-col rounded-lg shadow-2xl overflow-hidden bg-black"
      >
        <motion.div initial={{ scale: 1.025 }} animate={{ scale: 1 }}>
          <Image
            alt={selected.title || selected.id}
            src={selected.url}
            width={1080}
            height={1080}
            className="w-full h-auto max-h-[75vh] object-contain"
          />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
export default UrbanModal;
