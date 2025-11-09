import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

const NatureModal = ({ selected, setSelected }) => {
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

        {(selected.title || selected.tags?.length) && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
            className="bg-gradient-to-r from-gray-900 to-black p-6"
          >
            {selected.title && (
              <h3 className="text-2xl font-bold mb-3 text-white">
                {selected.title}
              </h3>
            )}
            {Array.isArray(selected.tags) && selected.tags.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {selected.tags.map((tag: string) => (
                  <div
                    key={tag}
                    className="badge bg-amber-500/20 border border-amber-400 text-amber-400"
                  >
                    {tag}
                  </div>
                ))}
              </div>
            )}
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};
export default NatureModal;
