import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import items from "../../public/nature/nature";

const Card = ({ setSelected, item }) => {
  return (
    <div className="inline-block w-full mb-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        whileHover={{
          scale: 1.025,
          transition: {
            duration: 0.2,
          },
        }}
        whileTap={{
          scale: 0.95,
        }}
        onClick={() => {
          setSelected(item);
        }}
        layoutId={`card-${item.id}`}
        className="w-full shadow-xl cursor-pointer  image-full"
      >
        <Image
          src={item.url}
          alt={item.alt}
          width={1080}
          height={1080}
          loading="lazy"
        />
      </motion.div>
    </div>
  );
};

const List = ({ setSelected }) => {
  return (
    <div className="bg-black p-4 px-[min(5vw,20em)]">
      <div className="gap-5 bg-black  columns-1 sx:columns-2 md:columns-3 lg:columns-4 xl:columns-5">
        {items.map((item) => (
          <Card key={item.id} setSelected={setSelected} item={item} />
        ))}
      </div>
    </div>
  );
};

export default List;
