import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import items from "../../public/nature/nature";

const Card = ({ setSelected, item }) => {
  return (
    <div className="mb-4 w-full inline-block">
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
        className="  w-full shadow-xl image-full cursor-pointer"
      >
        <Image
          src={item.url}
          alt={item.title}
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
      <div className=" columns-1 sx:columns-2 md:columns-3 lg:columns-4 xl:columns-5 gap-5 bg-black">
        {items.map((item) => (
          <Card key={item.id} setSelected={setSelected} item={item} />
        ))}
      </div>
    </div>
  );
};

export default List;
