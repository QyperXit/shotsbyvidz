import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

interface ModalProps {
  selected: any; // Replace 'any' with the appropriate type
  setSelected: React.Dispatch<React.SetStateAction<any>>; // Replace 'any' with the appropriate type
}

const Modal: React.FC<ModalProps> = ({ selected, setSelected }) => {
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
        <motion.div
          initial={{
            opacity: 0,
            y: 50,
          }}
          animate={{
            opacity: 1,
            y: 0,
          }}
          transition={{
            duration: 0.5,
          }}
          className=" bg-black bg-opacity-70  p-4"
        >
          <h3 className=" text-2xl font-bold mb-2  ">{selected.title}</h3>
          {selected.tags.map((tag: string) => {
            return (
              <div
                className="badge bg-base-400 border-none text-amber-400  ml-1 mb-1"
                key={tag}
              >
                {tag}
              </div>
            );
          })}
        </motion.div>
      </div>
    </div>
  );
};

export default Modal;
