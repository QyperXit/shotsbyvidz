import { motion } from "framer-motion";
import React from "react";

// import { items } from "../components/data";
import items from "../../public/automotive/auto";

const Card = ({ setSelected, item }) => {
  return (
    <div className="mb-4 w-full inline-block">
      <motion.img
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
        src={item.url}
        alt=""
        className="  w-full shadow-xl image-full cursor-pointer"
        layoutId={`card-${item.id}`}
      />
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
