import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";

import { items } from "../../public/blogPosts/data";

const Card = ({ setSelected, item }) => {
  return (
    <div className="mb-4 w-full inline-block  bg-gray-700 bg-opacity-50  p-4 rounded-xl ">
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
      >
        <Image
          src={item.url}
          alt={item.title}
          width={1080}
          height={1080}
          className=" rounded-lg w-full shadow-xl image-full cursor-pointer"
          loading="lazy"
        />
      </motion.div>
      <h3 className="font-bold mb-1 font-arial text-amber-400 weight pt-4 text-lg">
        {item.title}
      </h3>
      <p className=" text-gray-200">{item.description}</p>
    </div>
  );
};

const List = ({ setSelected }) => {
  return (
    <div className="bg-black p-4 px-[min(5vw,20em)] max-w-[75em] mx-auto">
      <div className=" columns-1 md:columns-2  gap-5 bg-black ">
        {items.map((item) => (
          <Card key={item.id} setSelected={setSelected} item={item} />
        ))}
      </div>
    </div>
  );
};

export default List;
